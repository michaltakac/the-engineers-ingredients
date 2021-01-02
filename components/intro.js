export default function Intro() {
  return (
    <section className="mt-16 mb-16 md:mb-12 xl:flex xl:justify-center">
      <h1 className="text-center xl:text-left text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        The Engineer's
        <br />
        Ingredients
      </h1>
      <h4 className="text-center xl:text-right text-md md:text-2xl mt-5 md:pl-10 xl:w-1/3 tracking-tighter ">
        This project gathers specifically crafted digital content focused on engineering, which collectively represents
        the vision of immediately accessible knowledge, digestible in a way that our brain can develop better
        connections between various concepts.
        <p className="mt-4 font-bold hover:underline">
        <a href={`https://github.com/michaltakac/the-engineers-ingredients`}>
          View on GitHub
        </a>
        </p>
      </h4>
    </section>
  );
}
