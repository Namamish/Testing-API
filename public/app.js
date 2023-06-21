const fetchUGData = async () =>
{
    const res = await axios.get("https://major-programmes.onrender.com/admissions/majorProgramme/visible?category=Undergraduate Programme");
    const records = res.data;
    console.log(records);
    
    if(records[0].isComment === true)
    {
        const p = document.querySelector("p");
        p.append(records[0].nameOfProgrammeOrComment);
    }
    
    else
    {
        records.forEach(record => {
            const li = document.createElement('li');
            li.append(record.nameOfProgrammeOrComment);
            const ul = document.querySelector('ul');
            ul.append(li);
        }); 
    }    
}

fetchUGData();

const fetchPhDData = async() => {
    
    const res = await axios.get("https://major-programmes.onrender.com/admissions/majorProgramme/visible?category=PhD Programme");
    const records = res.data;

        const phdElements = document.querySelectorAll(".PhD")

        if(records[0].isComment === true)
        {
            phdElements[1].append(records[0].nameOfProgrammeOrComment);
        }
    
        else
        {
            records.forEach(record => {
                const li = document.createElement('li');
                li.append(record.nameOfProgrammeOrComment);
                phdElements[0].append(li);
            }); 
        }

}

fetchPhDData();