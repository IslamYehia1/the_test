import { Frame, useEditor, useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Container } from "components/selectors";
const Image = ({
  src = "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?cs=srgb&dl=pexels-burak-karaduman-1549326.jpg&fm=jpg&w=640&h=423",
}) => {
  const {
    connectors: { connect, drag },
    setProp,
    isClicked,
  } = useNode((node) => ({
    isClicked: node.events.selected,
  }));
  return (
    <Container
      background={{
        r: 76,
        g: 78,
        b: 78,
        a: 0,
      }}
      flexDirection="column"
      margin={["0,", "0", "20", "0"]}
      width="100%"
      height="auto"
    >
      <img src={src} />
    </Container>
  );
};
// Image.craft = {
//   displayName: "Image",
//   props: {
//     videoId: "MS6D30Ihpq0",
//   },
//   // related: {
//   //   toolbar: ImageSettings,
//   // },
// };

export default Image;
