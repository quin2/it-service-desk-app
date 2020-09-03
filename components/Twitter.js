import Base64 from 'Base64';

//loads most recent tweet from IT service desk twitter

//does auth dance to authenticate client with twitter API
twitterInit = () => {
    var credentials = encodeURIComponent(Constants.manifest.extra.consumerToken) 
    + ":" + encodeURIComponent(Constants.manifest.extra.consumerTokenSecret);
    var encoded = Base64.btoa(credentials);

    fetch('https://api.twitter.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic ' + encoded
      },
      body: 'grant_type=client_credentials'
    }).then((response) => response.json()).then((responseData) => {
      this.loadTweet(responseData.access_token);
    })
    .catch((error) => {
      console.error(error);
    });
}

//takes bearer token and loads most recent tweet
loadTweet = (bearer) => {
	fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=lclarkit&count=1', {
	  method: 'GET',
	  headers: {
	    'Authorization': "Bearer " + bearer
	  }
	}).then((toParse) => toParse.json())
	.then((responseData) => {
	  //has funky loop here, force stop constant rerender!
	  this.setState({"recentTweet": responseData[0].text});
	  
	  const twURL = responseData[0].entities.urls;
	  if(twURL.length > 0){
	    this.setState({"tweetURL": twURL[0].url});
	  }
	  
	})
	.catch((error) => {
	  console.error(error);
	});
}

//makes a react component...you'll have to import more stuff
//works best inside another component
export getFormattedTweet = () =>{
    const tweet = (
        <>
        <Image style={styles.twitterIcon} 
                       resizeMode={'contain'} 
                       source={require('../assets/twLogo.png')} />
        <Text style={styles.infoTweetText}><Text style={styles.bold}>@lclarkit</Text>{"\n"}{this.state.recentTweet }</Text>
        </>
    );

    if(this.state.tweetURL.length > 0){
      return(
        <TouchableOpacity style={styles.infoTweet}
                          onPress={() => this.props.navigation.navigate('WebBrowser', {url: this.state.tweetURL, title:"Tweet Link"} )}>
          {tweet}
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.infoTweet}>
        {tweet}
      </View>
    );    
}