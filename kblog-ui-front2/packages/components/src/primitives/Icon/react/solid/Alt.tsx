import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAlt = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      d="M8.304 12.568h-1.25l.594-2.175h.033l.623 2.175Z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2.813 7.253c0 .531.336.85.897.85.477 0 .743-.244.909-.846l.103-.378h1.951l.104.407c.15.581.419.818.938.818.51 0 .88-.357.88-.855 0-.191-.034-.357-.117-.585L9.126 9.96c-.27-.738-.701-1.054-1.452-1.054-.702 0-1.137.328-1.395 1.054l-1.34 3.703a1.853 1.853 0 0 0-.125.589Zm6.321-.174c0 .589.32.921.88.921h2.536c.473 0 .776-.253.776-.701 0-.449-.311-.702-.776-.702h-1.656V9.83c0-.59-.32-.922-.88-.922s-.88.332-.88.922v4.25Zm4.82.103c0 .59.32.922.88.922s.88-.332.88-.922v-3.768h.884c.464 0 .776-.253.776-.702 0-.448-.303-.701-.776-.701H15.07c-.473 0-.777.253-.777.701 0 .449.312.702.777.702h.884v3.768Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAlt;
