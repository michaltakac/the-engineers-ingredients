import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="lg:pl-20 lg:w-2/3">
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Help us!
            </h3>
            <p className="mt-2">
              Pull requests that extend our dataset with links to dynamic, digital content focused on engineering
              knowledge are most welcome!
            </p>
            <p className="mt-2">
              If you like this project, please consider helping out. All contributions are welcome as well as donations
              in crypto:
            </p>
            <p className="mt-2">
              <ul>
                <li>BTC: 1PTV4AxHoDjd4wxuuRw6RVurxgJMgwZskn</li>
                <li>LTC: LUBd3XLRd9dK6B1EVrsnFnaz8cGCeDgwWq</li>
                <li>ETH: 0x3b5c52380b1C142FbCCf195C1E000Fa071490adF</li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center text-right lg:pl-4 lg:w-1/3">
            Hosted with{" "}
            <a
              href={`https://vercel.com/`}
              className="mx-1 font-bold hover:underline"
            >
              Vercel
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
