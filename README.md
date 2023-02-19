# Prismic with Next.js :rainbow:

For this project I made a custom type with three slices. Hero/ Features are template slices from Prismic that are styled with Tailwind. For the third one, TestSlice, I had originally wanted to experiment with with Styled components but that gave me hydration errors so I tried out CSS modules instead. Normally I would stick to one styling system but I thought it might be interesting to try both and show the differences. I think both choices are nice. If you want a less verbose JSX and have preference for classic CSS then the CSS modules would be a good option. Tailwind has the advantage of having everything contained within each slice which makes navigation easier.

In the component folder you can see an example of reusable components such as ButtonLink that I use both in Hero and TestSlice. These were automatically set up by PrismicM, as I chose to do their set-up tutorial.

## :cake: Slices 	
![slices](https://user-images.githubusercontent.com/7037910/219959371-a78d0c97-af0c-4add-a1b8-36b560d6c173.png)

## :pencil2: Editor 	


![editor](https://user-images.githubusercontent.com/7037910/219959405-4181a67a-9ccc-4c30-ac9e-d1bd35312ba6.png)
