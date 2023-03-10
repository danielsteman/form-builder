import { Icon, IconProps, Link } from "@chakra-ui/react";

const Logo = (props: IconProps) => (
  <Link href="/">
    <Icon viewBox="0 0 512 512" boxSize={12} {...props}>
      <path
        fill="currentColor"
        d="M27.9 2.3C15.8 6.4 7.5 14.2 2.8 25.7L.5 31.5.2 254C0 473 0 476.6 1.9 483c3.8 12.3 12.1 21.4 23.8 26.2l5.8 2.3h224c178.6 0 224.9-.3 228.2-1.3 6.8-2 16.4-9.1 20.6-15.2 2-3 4.6-8.3 5.7-11.8 2-6.3 2-10.1 2-227.2s0-220.9-2-227.2c-4.3-14.1-14.3-23.7-28.5-27.4-4.1-1.1-45-1.4-226-1.4L34.5.1l-6.6 2.2zM346 146v25H231v62l52.3.2 52.2.3.3 24.7.2 24.8H231v108h-65V121h180v25z"
      />
    </Icon>
  </Link>
);

export default Logo;
