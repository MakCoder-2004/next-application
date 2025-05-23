import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import KeyboardKey from "@/components/KeyboardKey";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="flex justify-center">
        <Tag title="Features" />
      </div>

      <div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">
        {/* Feature 1 */}
        <div className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict free team editing."
            className="group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-400 transition duration-300">
                <div className="relative size-full bg-neutral-700 rounded-full flex items-center justify-center gap-1">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span className="size-1.5 rounded-full bg-white" key={i} />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
        </div>

        {/* Feature 2 */}
        <div className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to your actions."
            className="group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We&apos;ve achieved{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ">
                  <span className="group-hover:text-lime-400 transition duration-300">
                    incredible
                  </span>
                </span>{" "}
                results this year
              </p>
            </div>
          </FeatureCard>
        </div>

        {/* Feature 3 */}
        <div className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto">
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
            className="group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <KeyboardKey
                className="w-28 outline-2 outline-offset-4 outline-transparent
              group-hover:outline-lime-400 transition-all duration-500 
              group-hover:translate-y-1"
              >
                shift
              </KeyboardKey>
              <KeyboardKey
                className="outline-2 outline-offset-4 outline-transparent
              group-hover:outline-lime-400 transition-all duration-500 
              group-hover:translate-y-1 delay-150"
              >
                alt
              </KeyboardKey>
              <KeyboardKey
                className="outline-2 outline-offset-4 outline-transparent
              group-hover:outline-lime-400 transition-all duration-500 
              group-hover:translate-y-1 delay-300"
              >
                C
              </KeyboardKey>
            </div>
          </FeatureCard>
        </div>
      </div>

      {/* Feature tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-neutral-900 gap-3 items-center border border-white/10 rounded-2xl inline-flex px-3 md:px-4 py-1.5 md:py-2 md:m-2 hover:scale-105 transition duration-300 group"
          >
            <span className="size-5 rounded-full inline-flex items-center justify-center bg-lime-400 text-neutral-950 text-xl group-hover:rotate-45 transition duration-500">
              &#10038;
            </span>
            <span className="text-white font-semibold md:texl-lg">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
