# PasswordGenerator

This application has been (on and off) a long time in the making.

![Startimg](startimg.png)

The most frustrating thing about this homework assignment is the simplicity of what a coder can miss and the carefullness that is needed to code effectively (without anything going wrong).

Things started going in the right direction once I began focusing on the instructions given rather than improving the css or finding the css link.

I had to separate out the lowercase and uppercase variables and include the separate "special" and "numeric" characters in the javascript. 

![Alertimg](alertimg.png)

- For the for loop, I did "length -1", because the loop begins at 0 rather than 1. 
- I also had to add "newPassword" in its own equation. 

Using my assignments, the weather dashboard and the first project, I tried to do an ajax call under the foor loop. Of course, this did not work. 

So I just declared "newPassword" and directly set it equal to the random math equation.

That didn't work...


So, I tried to append, then prepend. I went back and pre-declared "newPassword" (let newPassword = "", setting it to what it might be if a stupid user selects "cancel" on all four criteria). 

![Doneimg](doneimg.png)


I still am confused about how this works, because I again tried ajax methods but they all did not work until I declared "newPassword" and set it to the random math equation. The thing that confuses me the most is how [newPassword = newPassword + etc.] because that is like saying that 0 = 0 + 1.

Or is it like saying 1 = 1 + 0?...