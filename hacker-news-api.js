<script>
	var hn = require('hacker-news-api');
 
// Get recent ask_hn posts, polls, and comments 
hn.ask_hn().poll().comment().recent(function (error, data) {
  if (error) throw error;
  console.log(data);
});
 
// Get pg's top story and show_hn posts 
hn.author('pg').story().show_hn().top(function (error, data) {
  if (error) throw error;
  console.log(data);
});
 
// Search for comments and storys containing 'js' before the past week 
hn.comment().story().search('js').before('past_week', function (error, data) {
  if (error) throw error;
  console.log(data);
});</script>