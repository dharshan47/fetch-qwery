import { describe, it, expect } from "vitest";
import { discoverAssets } from "fetch-qwery";


describe("discoverAssets", () => {
  it("should find images in a nested object", () => {
    const data = {
      user: {
        avatar: "https://example.com/avatar.jpg",
        photos: ["https://example.com/p1.png", "https://example.com/p2.gif"]
      },
      content: "Hello world"
    };

    const { images } = discoverAssets(data);
    expect(images).toContain("https://example.com/avatar.jpg");
    expect(images).toContain("https://example.com/p1.png");
    expect(images).toContain("https://example.com/p2.gif");
    expect(images.length).toBe(3);
  });

  it("should find API links in a nested object", () => {
    const data = {
      links: {
          next: "https://api.example.com/v1/posts?page=2",
          detail: "https://api.example.com/v1/posts/123"
      }
    };

    const { links } = discoverAssets(data);
    expect(links).toContain("https://api.example.com/v1/posts?page=2");
    expect(links).toContain("https://api.example.com/v1/posts/123");
  });
});
