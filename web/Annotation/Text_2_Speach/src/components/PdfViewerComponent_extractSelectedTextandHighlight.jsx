//PdfViewerComponent.jsx
import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  let PSPDFKit, instance;

  useEffect(() => {
    const container = containerRef.current;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      const defaultToolbarItems = PSPDFKit.defaultDocumentEditorToolbarItems;

      // Insert custom item at the desired position
      const toolbarItems = [...defaultToolbarItems];

      instance = await PSPDFKit.load({
        container,
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${import.meta.env.PUBLIC_URL ?? ""}`,
        documentEditorToolbarItems: toolbarItems,
      });

      // Add event listener for text selection change
      instance.addEventListener("textSelection.change", async textSelection => {
        if (textSelection) {
          const text = await textSelection.getText();
          console.log("Selected text:", text);
          const results = await instance.search(text);
          const annotations = results.map((result) => {
          return new PSPDFKit.Annotations.HighlightAnnotation({
          pageIndex: result.pageIndex,
          rects: result.rectsOnPage,
          boundingBox: PSPDFKit.Geometry.Rect.union(result.rectsOnPage)
        });
      });
        instance.create(annotations);
         // highlightSelectedText(instance, textSelection);
        } else {
          console.log("No text is selected");
        }
      });

      // Cleanup event listener on component unmount
      return () => {
        PSPDFKit.unload(container);
      };
    })();
  }, [props.document]);

  // Function to highlight the selected text
  // const highlightSelectedText = async (instance, textSelection) => {
  //   console.log(textSelection);
  // };

  return (<div ref={containerRef} style={{ width: "100%", height: "100vh" }} />);
}

