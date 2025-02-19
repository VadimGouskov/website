import * as React from "react";
import { Container } from "../components/Container";
import { getAbout } from "./repo/getAbout";

import Image from "next/image";

type AboutProps = {};

const About: React.FC<AboutProps> = async (props) => {
  const data = await getAbout();

  if (!data) {
    return (
      <Container>
        <div>About not found</div>
      </Container>
    );
  }

  return (
    <main>
      <Container>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:basis-1/3">
              <div className="aspect-square md:aspect-2/3 relative">
                <Image
                  className="md:object-contain object-top"
                  fill
                  src={data.image.src}
                  alt={data.image.alt}
                />
              </div>
            </div>

            <div className="md:basis-2/3">
              <h1>{data.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
