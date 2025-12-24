import { useRef, useState } from "react";

function Home() {
  const [show, setshow] = useState(false);

  const shows = () => {
    if (!setshow) {
      setshow;
    }
    setshow((prev) => prev);
    console.log("heloo");
  };

  const move = useRef(null);

  const moveleft = () => {
    move.current.scrollBy({
      left: "200",
      behavior: "smooth",
    });
  };

  const moveright = () => {
    move.current.scrollBy({
      left: "-200",
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className="w-full md:h-20 h-15 bg-transparent flex items-center justify-between pl-5 pr-5 md:px-30"
        style={{
          background:
            "rgba(0,0,0,0.9)  URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXH9cFzBv-biCZC8mUW6_QkVPmbswX4R-Qw&s')",
          backgroundBlendMode: "darken",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-2xl text-red-600 font-bold md:text-5xl">
          Netfliix
        </div>
        <div className="flex wrap gap-2">
          <select
            name="language"
            className="border-2 text-white border-white p-1 outline-0 rounded md:px-5 bg-black"
          >
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
          <button className="bg-red-600 text-white py-1 px-3 rounded  ">
            Sign IN
          </button>
        </div>
      </nav>

      <main className="w-full h-auto flex flex-col wrap items-center bg-black">
        <section
          className="w-full md:h-160 h-125 flex wrap flex-col justify-center "
          style={{
            background:
              "rgba(0,0,0,0.7)  URL('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')",
            backgroundBlendMode: "darken",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full text-white p-2 text-center">
            <h1 className="font-bold text-4xl md:text-6xl">
              Unlimited movies,
              <span className="md:hidden"> shows, and more</span>
            </h1>
            <h1 className="font-bold text-4xl md:text-6xl hidden md:block">
              shows, and more
            </h1>
            <p className="md:text-2xl md:mt-5 ">
              Starts at ₹149. Cancel at any time.
            </p>
            <p className="mt-3 md:mt-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="w-full mt-2 px-10 text-white flex wrap flex-col items-center gap-2 md:flex-row md:justify-center">
            <input
              className="border-1 md:p-4 md:font-bold w-full md:w-100 outline-0 border-white p-3 px-5 rounded"
              type="email"
              placeholder="Email address"
            />
            <button className="p-3 md:w-55 md:p-3 md:text-2xl bg-red-600 w-35 font-bold rounded">
              Get Started <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </section>

        <section className="w-full h-auto border-t-4  border-t-red-500 rounded-full flex justify-between">
          {" "}
        </section>
        <div className="w-[80%] text-10 md:text-2xl font-bold bg-black text-white relative top-4">
          Trending Now
        </div>
        <section className="w-full h-auto flex justify-center items-center bg-black">
          <button
            className="bg-gray-600 rounded-2xl h-25 w-5"
            onClick={moveright}
          >
            {" "}
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div
            className=" w-[80%] mt-3 flex wrap gap-3 border-2 p-2 md:p-5 overflow-x-scroll hide-scroll-line flex-nowrap md:gap-5 scroll-smooth"
            ref={move}
          >
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-200 ease-in-out
           hover:scale-105 transform "
              src="https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/hp2/hp2-vert-2025-v2.jpg?downsize=1200:*&image-quality=7&output-format=webp&output-quality=70"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-200 ease-in-out hover:scale-105 transform"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjNNnGYPx-zQOKQRrpcZuuQtLvsLEDDXJzQ&s"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6LkuMHovYxtcj4DcS1fW8DfXFW0sFwNbaw&s"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://m.media-amazon.com/images/M/MV5BODVlYjc0NDAtZTNjMy00YjNhLTg0ZDQtNDY1NWJiMWI0NGIwXkEyXkFqcGc@._V1_.jpg"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_.jpg"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://fictionhorizon.com/wp-content/uploads/2024/01/best-romantic-movies-one-day.jpg"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://i.pinimg.com/236x/31/1b/3b/311b3b2dc9e7167a1dc58b255a9bc5cb.jpg"
              alt=""
            />
            <img
              className="w-25 h-40 rounded sm:w-35 sm:h-50 md:w-45 md:h-60 transition duration-300 ease-in-out
               hover:bg-red-500 hover:scale-110 transform"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWhubjFomKpcQ4il6aB85GtZeSPrC0fx53Q&s"
              alt=""
            />
          </div>
          <button
            className="bg-gray-600 rounded-2xl h-25 w-5"
            onClick={moveleft}
          >
            {" "}
            <i class="fa-solid fa-angle-right"></i>{" "}
          </button>
        </section>

        <div className="w-[80%] font-bold text-10 md:text-2xl bg-black text-white ">
          More reasons to join
        </div>

        <section className="w-[80%] h-auto flex wrap flex-col pt-3 justify-center gap-2">
          <div className="flex wrap flex-col sm:flex-row gap-2 bg-black">
            <div className="p-3  bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl h-45 flex wrap flex-col justify-evenly  sm:h-50 gap-1 sm:w-[50%] md:h-60 ">
              <h2 className="font-bold text-white text-1xl md:text-2xl">
                Enjoy on your TV
              </h2>
              <p className="text-gray-400 text-1">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
              <div className="text-3xl text-white text-end">
                <i class="fa-solid fa-tv"></i>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl h-45 flex wrap sm:h-50 justify-evenly   flex-col gap-1 sm:w-[50%] md:h-60">
              <h2 className="font-bold text-white text-1xl md:text-2xl">
                Download your shows to watch offline
              </h2>
              <p className="text-gray-400 text-1">
                Save your favourites easily and always have something to watch.
              </p>
              <div className="text-3xl text-white text-end">
                <i class="fa-solid fa-arrow-down"></i>
              </div>
            </div>
          </div>
          <div className="flex wrap flex-col gap-2 sm:flex-row bg-black">
            <div className="p-3  bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl flex wrap sm:h-50 justify-evenly flex-col gap-1 h-45 sm:w-[50%] md:h-60">
              <h2 className="font-bold text-white text-1xl md:text-2xl">
                Watch everywhere
              </h2>
              <p className="text-gray-400 text-1">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
              <div className="text-3xl text-white text-end">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
            <div className="p-3  bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl flex wrap justify-evenly sm:h-50  flex-col gap-1 h-45 sm:w-[50%] md:h-60">
              <h2 className="font-bold text-white text-1xl md:text-2xl">
                Create profiles for kids
              </h2>
              <p className="text-gray-400 text-1">
                Send kids on adventures with their favourite characters in a
                space made just for them — free with your membership.
              </p>
              <div className="text-3xl text-white text-end">
                <i class="fa-solid fa-child"></i>
              </div>
            </div>
          </div>
        </section>

        <div className="w-[80%] font-bold text-10 md:text-2xl bg-black text-white mt-5">
          Frequently Asked Questions
        </div>

        <section className="w-[80%] h-auto">
          <div
            onClick={shows}
            className="cursor-pointer w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1>What is NETFLIIX ?</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          )}

          <div
            onClick={shows}
            className="w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1 className="">How much does netfliif cost?</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          )}

          <div
            onClick={shows}
            className="w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1 className="">Where i can watch?</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS or
                Android app. Use downloads to watch while you're on the go and
                without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          )}

          <div
            onClick={shows}
            className="w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1 className="">How do i cancel?</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                Netflix is flexible. You can easily cancel your account online
                in two clicks. There are no cancellation fees – start or stop
                your account anytime.
              </p>
            </div>
          )}

          <div
            onClick={shows}
            className="w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1 className="">What can i watch on netfliix</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          )}

          <div
            onClick={shows}
            className="w-full h-15 rounded bg-neutral-700 flex wrap justify-between items-center px-3 mt-2 text-1xl text-white sm:text-2xl transition ease-in-out hover:bg-neutral-600"
          >
            <h1 className="">Is netfliix good for kids</h1>
            <i class="fa-solid fa-plus"></i>
          </div>

          {show && (
            <div className="w-full p-3 rounded text-white bg-neutral-700 mt-1 sm:text-2xl flex flex-col wrap gap-5">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          )}
        </section>

        <div className="w-[80%]  font-bold text-10  bg-black text-white mt-15 text-first">
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        <section className="w-[80%]  h-auto">
          <div className="w-full mt-2 py-20  text-white flex wrap flex-col  gap-2 md:flex-row md:justify-center mt-5">
            <input
              className="border-1 md:p-2 md:text-2xl md:font-bold w-full md:w-170 outline-0 border-white p-3  rounded"
              type="email"
              placeholder="Email address"
            />
            <button className="p-3 md:w-55  md:p-3 md:text-1xl lg:text-2xl bg-red-600 w-40 font-bold rounded">
              Get Started <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </section>
      </main>

      <footer className="w-full h-auto bg-gray-950 text-white text-1xl p-4 md:p-10">
        <div className="mt-10 w-full text-start ">
          Questions? Call 00000000000000
        </div>
        <div className="w-auto h-auto text-start mt-10 flex flex-col wrap gap-2 text-[12px] sm:flex-row sm:justify-between sm:text-1xl sm:gap-5 lg:text-[1rem]">
          <div className="sm:flex wrap flex-col gap-2">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="sm:flex wrap flex-col gap-2">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="sm:flex wrap flex-col gap-2">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div className="sm:flex wrap flex-col gap-2">
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex wrap gap-2 mt-7">
          <select
            name="language"
            className="border-2 text-white border-white p-1 outline-0 rounded md:px-5 bg-black"
          >
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="w-full flex justify-start mt-5 lg:text-2xl">
          Netflix India
        </div>
        <div className="w-full flex justify-start text-start mt-5 text-[10px] lg:text-[1rem]">
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot.Learn more.
        </div>
      </footer>
    </>
  );
}

export default Home;
