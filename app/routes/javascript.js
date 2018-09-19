import Route from "@ember/routing/route";
import $ from "jquery";
export default Route.extend({
  //function gets invoked when you visit the url/department; receives params
  model(params) {
    console.log(params);
    let url = `https://www.reddit.com/r/javascript.json`;
    //ember will wait for this to finish before rendering the template
    return $.getJSON(url);
  }
});
