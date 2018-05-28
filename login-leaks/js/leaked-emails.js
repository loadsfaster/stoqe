$(document).ready(function() {
    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    function loadbreaches() {
        var html;
        var count = 1;
        var breach_name;
        var breach_title;
        $('#col-header').html('All Breaches');
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                html = '<div class="row">';
                for(i=0;i<data.length;i++) {
                    count++;
                    breach_title = data[i].Title;
                    breach_name = data[i].Name;
                    //if(breach_title == '17') {
                      //  breach_title = '17 Media';
                    //}
                    //html += '<div class="col-md-4">';
                    //html += '<div class="panel panel-default">';
                    html += '<div class="panel-heading text-center">'+breach_title+'</div>';
                    html += '<div class="panel-body">';
                    //html += '<img src="https://az594751.vo.msecnd.net/cdn/'+breach_name+'.'+data[i].LogoType+'" class="breach-logo" /><br>';
                    //html += '<p><a href="#" class="btn btn-primary btn-block">Learn More &raquo;</a></p>';
                    //html += '</div>';
                    //html += '</div>';
                    html += '</div>';
                    if(count == 4) {
                        html += '</div>';
                        html += '<div class="row">';
                    }
                }
                //$('#results').append(html);
            }
        });
    }

    function top_five() {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                var html = '';
                for(i=0;i<5;i++) {
                    var breach = data[i].Title;
                    if(breach == '17') {
                        breach = '17 Media';
                        html += '<p>'+breach+'</p>';
                    }
                    else {
                        html += '<p>'+breach+'</p>';
                    }

                }
                $('#topfive').append(html);
            }
        });
    }

    function latest() {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                var html = '';
                for(i=0;i<1;i++) {
                    var breach = data[i].Title;
                    if(breach == '17') {
                        breach = '17 Media';
                        html += '<p>'+breach+'</p>';
                    }
                    else {
                        html += '<h3>Latest Breach: '+breach+' which had '+formatNumber(data[i].PwnCount)+' exposed accounts and included '+data[i].DataClasses[0]+'.</h3>';
                    }

                }
                $('#latest').append(html);
            }
        });
    }

    function getInfo(email) {
        var count = 1;
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breachedaccount/'+email+'?includeUnverified=true',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                //var html = '';
                for(i=0;i<data.length;i++) {
                    count++;
                    var breachName = data[i].Title;
                    //var breachDesc = data[i].Description
                    //var breachCount = data[i].PwnCount
                    //html += ''+breachName+', ';
                    if(count == 1) {
                        html += '';
                    }
                }
                var html = '<div class="mb0 brv0 notification is-danger is-size-5"><strong>BAD NEWS</strong><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>At least '+count+' account logins</strong> for this email address <strong>have been leaked online</strong><!--br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; At least <strong>'+count+' account logins</strong> have been compromised--><!--br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>Nb:</strong> More <strong>'+count+' account logins</strong> might also have been leaked--><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; This email address was leaked online <strong>with passwords + login addresses</strong><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; This email address <strong>is known to work</strong> with specific passwords<br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>Full access to accounts</strong> using this email address have been leaked online<!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; Are you using <strong>the same email address + password for different accounts?</strong> <br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; If so, <strong>how many accounts does this email address + password login to?</strong--><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>All accounts </strong>using this same email adddress + password <strong> are vulnerable</strong><!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; And <strong>how many of these leaked accounts could belong to you?</strong--><!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; <strong>Can this password login to</strong> your banking, email, website, social media, etc.?--></div><div class="brt0 notification is-warning is-size-5"><span class="icon"><i class="fas fa-exclamation-circle"></i></span>&nbsp; <strong>STATUS</strong>: This email address is <strong>LEAKED and COMPROMISED</strong><!-- Want help? STOQE can save you.--><div>';
                $('#sites').html(html);
            },
            error: function(data) {
                var html = '<div class="brt0 notification is-success is-size-5"><strong>GOOD NEWS</strong><br><span class="icon"><i class="fas fa-shield-check"></i></span>&nbsp; This email address has <strong>never <span class="is-italic">knowingly</span> leaked online</strong><br><span class="icon"><i class="fas fa-bell"></i></span>&nbsp; <strong>STOQE Leaks Alert</strong> will notify you if it does get leaked online<div>';
                //var html = '<h4>Yes this email address has been leaked and published online — along with account usernames, passwords, and login addresses.</h4>';
                for(i=0;i<data.length;i++) {
                    var breachName = data[i].Title;
                    var breachDesc = data[i].Description
                    var breachCount = data[i].PwnCount
                    html += '<h3>'+breachCount+' <span class="label label-danger">'+breachName+'</span></h3>';
                  //html += '<p>'+breachDesc+'</p>';
                    html += '<br>';
                }
                $('#sites').html(html);
            }
        });
    }
    loadbreaches();
    //top_five();
    //latest();
    $('#search').click(function() {
        getInfo($('#email').val());
    });
});