import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return {
		title: "SEASKY",
		description: "",
	};
};

export default function Index() {
	return (
		<div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
			<div style={{ textAlign: "center" }}>
				<img src="/logo.svg" alt="" style={{ width: 200 }} />
				<p style={{ fontFamily: "sans-serif", color: "#789" }}>
					Em breve nosso site estará disponível
				</p>
			</div>
		</div>
	);
}
