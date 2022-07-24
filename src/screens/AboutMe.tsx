import ProfilePicture from "../assets/pdp.jpeg";
import CssLogo from "../assets/css-logo.png";
import SassLogo from "../assets/sass-logo.png";
import TypeScriptLogo from "../assets/typescript-logo.png";
import ReactLogo from "../assets/react-logo.png";
import AngularLogo from "../assets/angular-logo.png";
import HtmlLogo from "../assets/html-logo.png";
import GitLogo from "../assets/git-logo.png";
import DartLogo from "../assets/dart-logo.png";
import FlutterLogo from "../assets/flutter-logo.svg";
import NodeLogo from "../assets/node-logo.png";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center pt-4">
      <p className="font-logo text-white text-3xl lg:text-5xl lg:p-4 lg:-translate-y-6 text-center">
        <span className="text-blue-500">Ab</span>
        <span className="">out</span> <span className="text-red-500">Me</span>
      </p>
      <div className="m-6 text-sm md:text-base">
        <div className="flex max-w-6xl space-y-8 md:space-y-0 md:space-x-8 items-center flex-col md:flex-row">
          <img
            src={ProfilePicture}
            alt="Amine profile picture with a suit and holding a microphone"
            className="rounded-full border border-white/30 w-36 md:w-44 lg:w-48"
          />
          <div className="text-white/80 space-y-3 border border-white/30 p-8 rounded">
            <p>
              <span className="m-4"></span>Hello, my name is{" "}
              <strong>Amine</strong>. I am a
              <strong> fullstack web & mobile developer</strong>. I love
              creating and building products that adds value to my users in
              their daily lives.
            </p>
            <p>
              <span className="m-4"></span>I started coding really young,
              because I used to play a lot of video games and at some point, I
              decided to create my own games. My favorite games are{" "}
              <strong>League of legends</strong>, <strong>Valorant</strong> and{" "}
              <strong>Among us!</strong>
            </p>
            <p>
              <span className="m-4"></span>In my free time, I also like to watch
              TV shows on Netflix and animes. My favorite shows are{" "}
              <strong>Breaking bad</strong>,<strong> Squid Game</strong>,{" "}
              <strong>Attack on Titan</strong> and{" "}
              <strong>Demon Slayer.</strong>
            </p>
            <p>
              <span className="m-4"></span>The project that I am most proud of
              is called{" "}
              <a
                href="https://weebchat-demo.netlify.app/"
                className="underline"
              >
                Weebchat
              </a>
              . It's a video chat application that uses face detection to
              animate a virtual anime avatar.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 mt-12 justify-between md:ml-48 lg:ml-52 gap-4 ">
          <img
            src={CssLogo}
            alt="CSS logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={SassLogo}
            alt="Sass logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={HtmlLogo}
            alt="Html logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={TypeScriptLogo}
            alt="Typescript logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={ReactLogo}
            alt="React logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={AngularLogo}
            alt="Angular logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={DartLogo}
            alt="Dart logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={FlutterLogo}
            alt="Flutter logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={GitLogo}
            alt="Git logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
          <img
            src={NodeLogo}
            alt="Node logo"
            className="lg:w-16 md:w-12 object-scale-down"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
