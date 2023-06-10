const fs = require('fs').promises;

async function ReadInfo(filePath) {
  try 
  {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
    return data;
  } 
  catch (error) 
  {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function WriteOutput(filePath) {
    try 
    {
      await fs.writeFile(filePath,"Minjaa mknu");
    } 
    catch (error)
     {
      console.error(`Got an error trying to write the file: ${error.message}`);
    }
  }

  var res = ReadInfo('../file.txt')
  WriteOutput('../copied.txt');