# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > Your answer here: In this line of code, `drovers` is storing the function hireDrovers() using the `cattleToDrive` variable, which is storing the value 50. The `cattleToDrive` value is used in this function as the `herdSize`, which is used in the loop used in hireDrovers() to find the number of drovers needed. This means that any time we call the `drovers` variable it will only run hireDrovers() using the value 50 as the herdSize when executing the function.
2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > Your answer here: The value of the variable `drovers` is determined by the function it is calling, hireDrovers(cattleToHerd), which is equal to 5. This means that 5 random drovers are pulled from the database in the drovers object into an array that contains an object for each drover. The value of `drover` is each one of the 5 drovers already pulled by the function. In this loop, `drover` looks at each individual drover object pulled, allowing us to look at each selected drover's information and reference specific information contained in the drover object. In this case, it allows us to console.log the first and last name of each drover in the loop.
3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > Your public Loom URL here https://www.loom.com/share/a47400d9c34e40aba420c0d23f7bc9f1?sid=47bafb3e-4f86-4982-a09a-bab6aff2d420
4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > Your answer here: This code is a 'for loop' that is going to push the word forest x amount of times, depending on the number determined in the condition. In this case, it is using the variable `forestNumber` to define the number of times the loop will run. `forestNumber` is declared at the beginning, initializing the loop with this code: let riverNumber = 0;. The condition is set after this with the code riverNumber < areas.rivers;. This is stating that the riverNumber cannot exceed the number of rivers available in the `rivers` key in the `areas` object, which was determined by the `createForests()` function. The next section of code, forestNumber++, means the code will be executed every time the code block has been executed. The code stating journey.push("forest") means that the string "forest" will be pushed into the `journey` array x amonut of times, as determined in the loop condition. 
5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > Your answer here: The `database` variable is an object containing objects `cattleTypes` and `drovers`. The `cattleTypes` object contains its own set of keys listing the ID and breed of each cow type, of which there are 4. The `drovers` object also contains its own set of keys listing the ID, first name, last name, and gender of each drover, of which there are 50. The objects in the `database` variable are used in the **drovers** and **cattle** modules to have accurate information when creating functions so that the cattle and drover information can be used to fulfill certain purposes.
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > Your answer here: The `herdSize` variable is defining a perameter of the function `hireDrovers()`. The function uses this parameter as a placeholder value to determine the number of random drovers to include in the loop. The argument is later set in the **main** module using the `cattleToDrive` variable, which assigns a value of 50. Since the `hireDrovers()` function is stored in the `drovers` variable with the `cattleToDrive` argument, the `herdSize` value is 50 whenever the function is called throughout the module.

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
