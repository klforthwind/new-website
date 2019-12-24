# Be Careful Seeding Randomness
## 12/23/2019

For the past few months, I have been focused on school and figuring out Tetris AI, hence why there has not been anything posted to the blog in the past five months. I was going through my Tetris AI code just yesterday, trying to figure out how I could optimize it, and I realized that I was using Numpy's random function, along with Random's random function. I was trying to figure out why I did this, and I believe that I did this by mistake when I was getting rid of numpy usage. At one point, I using python lists over numpy, since python lists with numbers were technically faster to access than numpy. So I did what I thought I should have done, and I switched Numpy's random function to Random's random function and staying consistent with modules imported would make the program slightly faster. Or that's what I thought...

I went to bed, letting the Tetris AI "evolve" over the night, waking up to see that all of the genomes had a fitness score of 21. I was believing that this could be because of chance, but I doubted such a high number, since I thought by chance that the fitness score would remain around 15, the amount of blocks that could be added in a line before it reaches the top. Something was definitely wrong with my code, so I was venturing through my code, and then I saw "seed(0)," and this was being triggered every time a Tetris game was started (since I wanted every genome to be facing the same order of blocks), around the time the genome is also created. Sweet, 12 hours of possible evolution wasted because I was seeding and then creating genomes.

Fun Fact: Numpy's randomness is not affected by Random's randomness, so now I am using Random's seeded randomness to create the block order for Tetris, and Numpy's non-seeded randomness for genome creation

Thanks for listening :)

##### Sources:
###### None :P