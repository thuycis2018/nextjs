import Image from 'next/image';
import { YEAR_WEB_DEV } from '../../lib/constants';

export default function AboutSection() {

    return (
        <div className="container mx-auto flex h-84 mb-10">
            <div className="flex flex-col md:flex-row items-center bg-green-5 text-white text-xl font-bold rounded-b-xl">
                <div className="md:flex-1 m-10 md:mb-5">
                    <p>
                    As a Software Engineer based in San Diego, I bring over {YEAR_WEB_DEV} years of expertise in full-stack development, eCommerce, and system integration. I am passionate about collaboration and known for driving projects forward by uniting the right people and keeping a clear focus on results. Have you ever been in a meeting where changes are discussed but no one takes the initiative? That is where I step in—I ensure those changes get implemented and things get done.</p>
                </div>
                <div className="relative w-60 h-60 m-4">
                    <Image
                        src="/jl.jpg"
                        width={160}
                        height={160}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                        alt="Julia Le"
                    />
                    <div className="absolute inset-0 bg-brown-500 opacity-5 rounded-full"></div>
                </div>
            </div>
        </div>
    );
  }