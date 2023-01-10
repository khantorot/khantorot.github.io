buildPage();

function buildPage() {

    const project_list = document.querySelector('.project_list');
    let out = '';

    for (key in projects) {
        out += '<tr>';
        out += '<td><a href="' + projects[key].link + '" target="_blank">' + projects[key].name + '</a></td>';
        
        let day = new Date(projects[key].date);
        let day_out = month[Number(day.getMonth())] + ' ' + day.getDate() + ', ' + day.getFullYear();

        out += '<td>' + day_out + '</td>';
        out += '</tr>';
    }

    project_list.innerHTML = out;
}



const filter_panel = document.querySelector('.filter_panel');

filter_panel.addEventListener('click', function (e) {
    if (e.target.classList.contains('name')) {
        if (!e.target.classList.contains('active')) {
            projects.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            e.target.classList.add('active');
        } else {
            projects.sort((a, b) => {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            })
            e.target.classList.remove('active');
        }
    }
    if (e.target.classList.contains('date')) {
        if (e.target.classList.contains('active')) {
            projects.sort((a, b) => {
                if (new Date(a.date) < new Date(b.date)) { return -1; }
                if (new Date(a.date) > new Date(b.date)) { return 1; }
                return 0;
            })
            e.target.classList.remove('active');
        } else {
            projects.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) { return -1; }
                if (new Date(a.date) < new Date(b.date)) { return 1; }
                return 0;
            })
            e.target.classList.add('active');
        }
    }

    buildPage();
})



