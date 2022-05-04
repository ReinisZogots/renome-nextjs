import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <div className="not_found">
      <h1 className="not_found__slogan">Oooops...</h1>
      <h2>That page can not be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
