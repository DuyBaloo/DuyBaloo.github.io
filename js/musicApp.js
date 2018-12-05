$(document).ready(() => {//execute when ready
    $('#searchForm').on('submit', (e) => {
        // define apikey
        var key = '22d23817f062e39a4d2b8894fd1b3d6b';

        //get input from user and call replace function to replace space with %20 for get method
        let input = ($('#searchInput').val());
        replaceSpace(input);

        //code block below will do a check on which button is chosen and send get request
        let whichSearch = ($('input[type=radio]:checked'));
        var option = whichSearch.val();
        if (option === 'Name'){
            //if search by song name
            $(function () {
                $.ajax({
                    type: "GET",
                    data: {
                        format: "jsonp",
                        callback: "callback",
                        q_track:input,
                        s_track_rating:"desc",
                        quorum_factor: 1,
                        apikey: key,
                    }
                    ,
                    url: "https://api.musixmatch.com/ws/1.1/track.search",
                    dataType: "jsonp",
                    jsonpCallback: 'callback',
                    contentType: 'text/plain; charset=utl-8',
                    success: function (data) {
                        displayResult(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            })
        }else if (option === 'Artist'){
            //if search by artist
            $(function () {
                $.ajax({
                    type: "GET",
                    data: {
                        format: "jsonp",
                        callback: "callback",
                        q_artist: input,
                        s_track_rating:"desc",
                        quorum_factor: 1,
                        apikey: key,
                    }
                    ,
                    url: "https://api.musixmatch.com/ws/1.1/track.search",
                    dataType: "jsonp",
                    jsonpCallback: 'callback',
                    contentType: 'text/plain; charset=utl-8',
                    success: function (data) {
                        displayResult(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            })
        }else if (option === 'Lyrics'){
            //if search by lyrics
            $(function () {
                $.ajax({
                    type: "GET",
                    data: {
                        format: "jsonp",
                        callback: "callback",
                        q_lyrics: input,
                        s_track_rating:"desc",
                        quorum_factor: 1,
                        apikey: key,
                    }
                    ,
                    url: "https://api.musixmatch.com/ws/1.1/track.search",
                    dataType: "jsonp",
                    jsonpCallback: 'callback',
                    contentType: 'text/plain; charset=utl-8',
                    success: function (data) {
                        displayResult(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            })
        }
        e.preventDefault();

    })
});

//this function will display the result to the webpage using the retrieve data
function displayResult(res){
    let results = res.message.body.track_list;
    console.log(results);
    let output = `<table class="table table-hover">
                    <thead>
                        <th scope="col">Songs</th>   
                        <th scope="col">Artists</th>
                        <th scope="col">Album</th>
                  
                        <th scope="col">Link</th> 
                    </thead>
                   </table>
                  `;
    //this function iterate the array and get outputs from it
    $.each(results, (index, info) => {
        output += `
                <table class="table table-hover">
                    <tbody>
                        <tr>
                          <th scope="row">${info.track.track_name}</th>
                          <td>${info.track.artist_name}</td>
                          <td>${info.track.album_name}</td>
                          <td><a href="${info.track.track_share_url}" target="_blank"><button type="button" class="btn btn-primary">View Song</button></a></td>
                        </tr>
                    </tbody>
                 </table>
        `;
    });
    $('#results').html(output);
}

//this function will replace any whitespace with %20 in a string
function replaceSpace(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === ''){
            arr[i] = '%20';
        }
    }
    return arr;
}


