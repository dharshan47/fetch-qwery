import ImagePreloadTest from "../../../components/ImagePreloadTest";

export default function ImageExample() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Image Preloading Example</h1>
      <ImagePreloadTest />
      <p className="mt-8">
        This example demonstrates how <code>fetch-qwery</code> automatically discovers and preloads 
        images from API responses to eliminate flicker and perceived latency.
      </p>
    </div>
  );
}
