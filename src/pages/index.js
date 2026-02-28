import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
// import Pricing from '../components/Pricing/Pricing';
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Projects />
			<Technologies />
			<Timeline />
			<Acomplishments />
			{/* <Pricing /> */}
		</Layout>
	);
};

export default Home;
