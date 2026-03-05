import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "fetch-qwery";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock fetch
global.fetch = vi.fn();

function wrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe("useFetch", () => {
  it("should fetch data correctly", async () => {
    const mockData = { id: 1, title: "Test" };
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(
      () => useFetch("https://api.example.com/data"),
      { wrapper },
    );

    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
  });

  it("should handle parallel fetching with array input", async () => {
    const mockData1 = { id: 1 };
    const mockData2 = { id: 2 };

    (fetch as any)
      .mockResolvedValueOnce({ ok: true, json: async () => mockData1 })
      .mockResolvedValueOnce({ ok: true, json: async () => mockData2 });

    const { result } = renderHook(() => useFetch(["/url1", "/url2"]), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([mockData1, mockData2]);
  });
});
