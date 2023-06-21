const fetchDdata = async () =>
{
    const res = await axios.get("https://major-programmes.onrender.com/admissions/majorProgramme/visible?category=Undergraduate%20Programme");
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

fetchDdata();



let ul =document.querySelector("ul");