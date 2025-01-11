import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import viberr from  "../../assets/viberr.png"


const Projects: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10">
            <h1 className="uppercase font-rubik text-5xl text-center font-extrabold" >Projects</h1>
            <Carousel>
                <CarouselContent className="max-w-56">
                    <CarouselItem>
                        <Card>
                            <CardHeader>
                                <CardTitle>Project 1</CardTitle>
                                <CardDescription>Project 1 description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a href="https://google.com" target="_blank">
                                    <img src={viberr} />
                                </a>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Projects;

