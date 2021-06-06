<template>
    <main class="grid-main">
            <section class="main-container">
                <article class="item item-1">
                    <header class="article-header">
                        <h2>Estudiantes destacados</h2>
                    </header>
                    <div class="students-container">
                        <div class="item-students" v-for="st in students" v-bind:key="st.id" v-bind:st="st">
                            <img v-bind:src="st.image" width="200" height="200" alt="Estudiante">
                            <h3>{{st.studentName}}</h3>
                            <p>{{st.studentDescription}}</p>
                        </div>
                    </div>
                </article>
                <article class="item" v-for="post in posts" v-bind:key="post.id" v-bind:post="post">
                    <header class="article-header">
                        <h2>{{post.title}}</h2>
                    </header>
                    <p>{{post.content}}</p>
                </article>
            </section>
        </main>
</template>

<script>
export default {
  name: 'MainHome',
    data: function(){
      return{
            students:[
            {   id: 0,
                image:'../img/student_1.jpg',
                studentName: "Jeff Winger",
                studentDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {   id: 1,
                image:"../img/student_2.jpg",
                studentName: "Shirley Bennett",
                studentDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {   id:2,
                image:"../img/student_3.jpg",
                studentName: "Britta Perry",
                studentDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            }],
            posts:[
            {   id:0,
                title: "Articulo 1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tellus vitae arcu volutpat eleifend vitae et est. Etiam lobortis turpis nec nisl pulvinar eleifend. Aenean cursus turpis eget augue interdum, non volutpat nunc consectetur. Aenean placerat, nunc non tincidunt sodales, augue arcu gravida felis, sit amet pulvinar leo ipsum ut magna. Nam augue orci, ultricies id metus at, varius fringilla velit. Nulla posuere elementum odio molestie suscipit. Cras pellentesque leo lectus, nec pharetra est tempor at. Vivamus vel ante vel erat tincidunt ullamcorper pharetra vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec neque tellus, molestie ac risus nec, consectetur tincidunt sapien. In lobortis quam consectetur, euismod elit ac, finibus nulla. Suspendisse et pharetra neque. In commodo, risus quis ultrices molestie, sem nunc lobortis ante, at sodales velit augue nec diam. Aenean ligula odio, dictum nec elit sit amet, interdum fringilla massa.",
            },
            {   id:1,
                title: "Articulo 2",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tellus vitae arcu volutpat eleifend vitae et est. Etiam lobortis turpis nec nisl pulvinar eleifend. Aenean cursus turpis eget augue interdum, non volutpat nunc consectetur. Aenean placerat, nunc non tincidunt sodales, augue arcu gravida felis, sit amet pulvinar leo ipsum ut magna. Nam augue orci, ultricies id metus at, varius fringilla velit. Nulla posuere elementum odio molestie suscipit. Cras pellentesque leo lectus, nec pharetra est tempor at. Vivamus vel ante vel erat tincidunt ullamcorper pharetra vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec neque tellus, molestie ac risus nec, consectetur tincidunt sapien. In lobortis quam consectetur, euismod elit ac, finibus nulla. Suspendisse et pharetra neque. In commodo, risus quis ultrices molestie, sem nunc lobortis ante, at sodales velit augue nec diam. Aenean ligula odio, dictum nec elit sit amet, interdum fringilla massa.",
            },
            {   id:2,
                title: "Articulo 3",    
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tellus vitae arcu volutpat eleifend vitae et est. Etiam lobortis turpis nec nisl pulvinar eleifend. Aenean cursus turpis eget augue interdum, non volutpat nunc consectetur. Aenean placerat, nunc non tincidunt sodales, augue arcu gravida felis, sit amet pulvinar leo ipsum ut magna. Nam augue orci, ultricies id metus at, varius fringilla velit. Nulla posuere elementum odio molestie suscipit. Cras pellentesque leo lectus, nec pharetra est tempor at. Vivamus vel ante vel erat tincidunt ullamcorper pharetra vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec neque tellus, molestie ac risus nec, consectetur tincidunt sapien. In lobortis quam consectetur, euismod elit ac, finibus nulla. Suspendisse et pharetra neque. In commodo, risus quis ultrices molestie, sem nunc lobortis ante, at sodales velit augue nec diam. Aenean ligula odio, dictum nec elit sit amet, interdum fringilla massa.",
            },
            {   id:3,
                title: "Articulo 4",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tellus vitae arcu volutpat eleifend vitae et est. Etiam lobortis turpis nec nisl pulvinar eleifend. Aenean cursus turpis eget augue interdum, non volutpat nunc consectetur. Aenean placerat, nunc non tincidunt sodales, augue arcu gravida felis, sit amet pulvinar leo ipsum ut magna. Nam augue orci, ultricies id metus at, varius fringilla velit. Nulla posuere elementum odio molestie suscipit. Cras pellentesque leo lectus, nec pharetra est tempor at. Vivamus vel ante vel erat tincidunt ullamcorper pharetra vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec neque tellus, molestie ac risus nec, consectetur tincidunt sapien. In lobortis quam consectetur, euismod elit ac, finibus nulla. Suspendisse et pharetra neque. In commodo, risus quis ultrices molestie, sem nunc lobortis ante, at sodales velit augue nec diam. Aenean ligula odio, dictum nec elit sit amet, interdum fringilla massa.",
            },
            {   id:4,
                title: "Articulo 5",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tellus vitae arcu volutpat eleifend vitae et est. Etiam lobortis turpis nec nisl pulvinar eleifend. Aenean cursus turpis eget augue interdum, non volutpat nunc consectetur. Aenean placerat, nunc non tincidunt sodales, augue arcu gravida felis, sit amet pulvinar leo ipsum ut magna. Nam augue orci, ultricies id metus at, varius fringilla velit. Nulla posuere elementum odio molestie suscipit. Cras pellentesque leo lectus, nec pharetra est tempor at. Vivamus vel ante vel erat tincidunt ullamcorper pharetra vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec neque tellus, molestie ac risus nec, consectetur tincidunt sapien. In lobortis quam consectetur, euismod elit ac, finibus nulla. Suspendisse et pharetra neque. In commodo, risus quis ultrices molestie, sem nunc lobortis ante, at sodales velit augue nec diam. Aenean ligula odio, dictum nec elit sit amet, interdum fringilla massa.",
            }],
        }}
}
</script>