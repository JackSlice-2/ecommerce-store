import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import StoreName from "./store-name";
import getInfo from "@/actions/get-info";

export const revalidate = 0;

const Navbar = async () => {
    const content = process.env.REACT_APP_INFORMATION_API;
    const categories = await getCategories();

    let information = null;
    if (content) {
        information = await getInfo(content);
    }

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <div className="font-bold x-xl">
                {information && <StoreName data={information} />}</div>
                <Link href="/allproducts" className="pl-5 ml-1 flex lg:ml-0 gap-x-2">
                    <p className="text-neutral-500 text-lg font-medium transition-colors hover:text-black dark:hover:text-white">All Products</p>
                </Link>
                <MainNav data={categories}/>
                <NavbarActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;