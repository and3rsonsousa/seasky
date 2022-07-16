import type { MetaFunction } from "@remix-run/node";
import { HiMenu, HiOutlineMenu, HiOutlinePhone, HiPhone } from "react-icons/hi";

export const meta: MetaFunction = () => {
	return {
		title: "SEASKY",
		description: "",
	};
};

export default function Index() {
	return (
		<div>
			<div className="container flex p-4 justify-between items-center">
				<div>
					<img src="/logo.svg" alt="Seasky" className="h-8" />
				</div>
				<div className="flex gap-2">
					<div className="flex gap-1 ">
						<div className="header-button">
							<img src="./brazil.png" alt="" />
						</div>
						<div className="header-button">
							<img src="./usa.png" alt="" />
						</div>
					</div>
					<div className="header-button">
						<HiMenu />
					</div>
					<div className="header-button">
						<HiPhone />
					</div>
				</div>
			</div>
			<div className="h-[70vh] bg-primary relative">
				<img
					src="./peixe-pargo.webp"
					alt=""
					className="h-full object-cover"
				/>

				<div className="absolute -left-24 -bottom-12">
					<img src="peixe2.png" alt="" className="w-[50%]" />
				</div>
			</div>

			<div className="grid place-items-center container py-24 text-center">
				<h2 className="text-6xl">
					<span className="font-bold text-primary">Qualidade</span>{" "}
					<br className="" /> e{" "}
					<span className="font-bold text-primary">confiança</span>{" "}
					<br /> que fazem <br /> a diferença
				</h2>
				<p></p>
			</div>
			<div className="container px-4 py-8">
				<h2 className="text-3xl font-bold text-primary mb-4">
					Quem somos
				</h2>
				<img src="" alt="" className="" />
				<div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Nostrum inventore veritatis itaque sint et? Voluptates
					dignissimos beatae numquam, dolores magni unde, praesentium
					cupiditate eos saepe minima rerum recusandae, facere sit.
				</div>
			</div>

			<div className="container px-4 py-8 bg-gray-100">
				<h2 className="text-3xl font-bold text-primary mb-4">
					Produtos
				</h2>
				<div className="grid gap-4">
					<div>
						<img src="" alt="" className="" />
					</div>
					<div>
						<img src="" alt="" className="" />
					</div>
					<div>
						<img src="" alt="" className="" />
					</div>
					<div>
						<img src="" alt="" className="" />
					</div>
				</div>
			</div>

			<div className="container px-4 py-8 bg-gradient-to-br from-accent to-primary">
				<h2 className="text-3xl font-bold text-white mb-4">
					Fale conosco
				</h2>
			</div>
			<div className="container px-4 py-8 bg-gray-800"></div>
		</div>
	);
}
