(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),l=a.n(r),m=(a(14),a(8)),o=a(1),c=a(2),s=a(4),d=a(3),h=(a(15),a(16),a(17),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var u=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};a(18);var p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.titleChange=function(t){e.setState({title:t.target.value})},e.descriptionChange=function(t){e.setState({description:t.target.value})},e.imgUrlChange=function(t){e.setState({imgUrl:t.target.value})},e.imdbUrlChange=function(t){e.setState({imdbUrl:t.target.value})},e.imdbIdChange=function(t){e.setState({imdbId:t.target.value})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,r=t.imdbUrl,l=t.imdbId,m=t.imgUrl,o=Object.values(this.state).every((function(e){return""!==e}));return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"formAddMovie"},n.a.createElement("label",{htmlFor:"title"},"Title",n.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:a,onChange:this.titleChange,required:!0})),n.a.createElement("label",{htmlFor:"description"},"Description",n.a.createElement("input",{type:"text",name:"description",placeholder:"description",value:i,onChange:this.descriptionChange})),n.a.createElement("label",{htmlFor:"imgUrl"},"imgUrl",n.a.createElement("input",{type:"text",name:"imgUrl",placeholder:"imgUrl",value:m,onChange:this.imgUrlChange,required:!0})),n.a.createElement("label",{htmlFor:"imdbUrl"},"imdbUrl",n.a.createElement("input",{type:"text",name:"imdbUrl",placeholder:"imdbUrl",value:r,onChange:this.imdbUrlChange,required:!0})),n.a.createElement("label",{htmlFor:"imdbId"},"imdbId",n.a.createElement("input",{type:"text",name:"imdbId",placeholder:"imdbId",value:l,onChange:this.imdbIdChange,required:!0})),n.a.createElement("button",{type:"submit",onClick:function(){return o&&e.props.addMovie({title:a,description:i,imdbUrl:r,imdbId:l,imgUrl:m})}},"Add Movie"))}}]),a}(i.Component),g=a(7),b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:g},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(u,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(p,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3a49043b.chunk.js.map