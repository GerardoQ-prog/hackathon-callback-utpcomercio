import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <img height={40} src="./img/logo.svg" alt="" />
      </Link>
    </>
  );
};

export default Logo;
