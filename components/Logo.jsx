import Image from "next/image";

export const Logo = ({ imgSrc, style }) => (
  <Image src={imgSrc} alt='' className={style} />
);
