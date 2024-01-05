// Get the sample file url
const jsonurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {
    //Read json file
    //Note: All setup code will run in this function to avoid asynchronous processing issues...
    var belly;
    var jsonfile = d3.json(jsonurl).then(function(data) {
        //Load json data into belly variable 
        belly = data;

        //Add ids to dropdown menu
        let dropdownMenu = document.getElementById("selDataset");
        for (let i = 0; i < belly.names.length; i++) {
            var option = document.createElement('option');
            option.value = belly.names[i];
            option.textContent = belly.names[i];
            dropdownMenu.add(option);
        }
        bellyslice = belly.samples[0];
        valueslice = Object.values(bellyslice.sample_values);

        console.log(valueslice.slice(0,10));

        valueslice = bellyslice.sample_values;
        console.log(valueslice);

        console.log(bellyslice.otu_ids);
        //Plot the initial subject values
        data = [{
            type: 'bar',
            x: belly.samples[0].sample_values,
            y: belly.samples[0].otu_ids,
            orientation: 'h'
        }];
    
        Plotly.newPlot('bar', data);


    });
}