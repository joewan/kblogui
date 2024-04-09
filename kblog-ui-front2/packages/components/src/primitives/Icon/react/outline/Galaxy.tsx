import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGalaxy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.906 7.006c-3.502-.108-6.927 1.326-7.963 4.268a1 1 0 0 1-1.886-.665c1.463-4.154 6.039-5.722 9.911-5.602 1.973.06 3.922.552 5.41 1.476C17.88 7.415 19 8.855 19 10.757c0 1.168-.552 2.09-1.317 2.74-.746.636-1.706 1.033-2.647 1.244-.945.211-1.945.252-2.823.112-.832-.133-1.762-.465-2.303-1.197-.401-.545-.334-1.166-.087-1.604.225-.398.6-.679.987-.82l.922-.34a3.624 3.624 0 0 0-.261-.051c-.604-.097-1.348-.073-2.07.089-.728.163-1.359.449-1.787.813-.41.349-.614.745-.614 1.218 0 1.066.618 2.002 1.815 2.742 1.204.745 2.887 1.208 4.666 1.285 1.777.078 3.551-.233 4.935-.932 1.367-.69 2.307-1.728 2.605-3.138a1 1 0 1 1 1.957.413c-.452 2.138-1.887 3.615-3.66 4.51-1.757.888-3.889 1.234-5.924 1.146-2.034-.09-4.07-.617-5.631-1.582C6.193 16.434 5 14.94 5 12.96c0-1.168.552-2.088 1.317-2.74.746-.635 1.706-1.032 2.646-1.243.945-.212 1.946-.252 2.823-.112.832.133 1.763.465 2.303 1.197.402.544.335 1.166.087 1.604-.224.398-.6.679-.986.82l-.923.34c.08.018.167.036.262.05.604.097 1.348.074 2.07-.088.727-.163 1.358-.449 1.787-.814.409-.348.614-.744.614-1.218 0-1.008-.568-1.887-1.676-2.574-1.12-.696-2.703-1.125-4.418-1.177Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGalaxy;
