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

        //Select first subject data
        bellyslice = belly.samples[0];
        //Convert to array and pair down to first ten values
        valueslice = Object.values(bellyslice.sample_values);
        valueslice = valueslice.slice(0,10);

        //Convert to array, pair down to first ten values, convert to string, add 'OTU'
        otuslice = Object.values(bellyslice.otu_ids);
        otuslice = otuslice.slice(0,10);
        for (i=0; i < 10; i++) {
            otuslice[i] = "OTU " + String(otuslice[i]);
        }

        //Plot the initial subject values
        data = [{
            type: 'bar',
            x: valueslice,
            y: otuslice,
            orientation: 'h',
            transforms: [{
                type: 'sort',
                target: 'y',
                order: 'descending'
            }]
        }];
    
        Plotly.newPlot('bar', data);


    });
}