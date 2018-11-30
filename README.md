This is a template for building a web application containing audio players that has navigation and other functionality. See README for more information.  

#### .NET MVC
#### C#
#### HTML5
#### JavaScript
#### CSS
#### Bootstrap

<hr>

## To Clone:

To clone repository as source code, it is assumed the user has Git installed (To install Git in your terminal, follow these instructions: [Downloading Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
) as well as an IDE such as Visual Studio. This application also requires installation of [.NET](https://www.microsoft.com/net/learn/get-started-with-dotnet-tutorial).  

1. In terminal / cmd prompt - Navigate to desired directory on your machine and type:

    ```git clone https://github.com/RillistikPete/MusicApplication.git YourRepositoryName```

2. Exchange "YourRepositoryName" with the desired name of your new source code project.

3. To run program:

    ```dotnet restore```

    ```dotnet run```

4. Add audio files to the 'audio' folder under 'wwwroot'.  The six audio players will all play the same sample audio file unless changed.  To do this, find the .ogg file locations in 'Index.cshtml' and replace.  Change the images the same way by adding images to the image folder and replacing the source in each img tag.

5. See 'site.js' for instructions on adding functionality to your audio players.

6. See preview below. Replace audio files and placeholder images to set up your new music player application!

![](https://raw.githubusercontent.com/rillistikpete/MusicApplication/master/wwwroot/images/ssmusicapp.png)
