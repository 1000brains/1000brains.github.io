---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

{% for member in site.data.pi %}

<div class="jumbotron">
<div class="row">
<div class="col-sm-4">
  <img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:250px"/>
</div>
<div class="col-sm-8 col-xs-12">
  <h3>{{ member.name }}</h3>
  <h4><i>{{ member.info }}</i></h4>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x" style="color:CornflowerBlue"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x" style="color:CornflowerBlue"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x" style="color:CornflowerBlue"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x" style="color:CornflowerBlue"></i></a> {% endif %}
  {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x" style="color:CornflowerBlue"></i></a> {% endif %}

  <ul style="overflow: hidden">
    {% for education in member.education %}
      <li>{{ education | replace: "-","&#8211;" }}</li>
    {% endfor %}
  </ul>

</div>
</div>
</div>
{% endfor %}

---


<div class="jumbotron" style="background-color:#f8f9fa; padding:2rem 2rem;">
  <h4 class="mb-3"><strong>About</strong></h4>
  <p>I like to think of myself as an explorer of visual art forms. My journey so far has been both satisfying and enriching, as I have had opportunities galore to explore graphic design, illustration, animation, music, editing, special effects, and, most importantly, do research on application of animation for the educational domain. My journey started off with formal training in design. I specialized in illustration for advertising. I promptly joined an advertising agency but left it just as promptly to follow the passion for animation. I was very fortunate to have Russian animation experts to guide me in the world of animation. In a span of just three years, these masters of animation revolutionized my understanding of motion, movement, postures, expressions, body language and the finer aspects of non-verbal communication.
<br>
<br>

After the completion of the formal training program, I got an exciting opportunity to be part of India’s first full-length, animation, live-action feature film. Over the next four years, my exposure to digital animation, special effects, film-editing and animation feature film production* peaked beyond my wildest imagination. Completion of this project left me with a probing question: What should the of educational content be to make it as engaging as general entertainment content? In pursuit of the answer to this question, I landed at India’s premier technology institute, IIT Bombay. The initial task here was quite removed from graphic design and animation; it was infinitely more mundane: video capture, edit and transmission (wide area) of educational content. I took this up as a challenge, however and successfully created processes, methodologies and FAQ sheets to ensure consistently high quality in the content creation. This was the first time that I was motivated to present the knowledge in a form that would benefit others from the experience. Pleasing outcomes of this experience were: my first research paper getting published in an international conference (ICDE, 2005) and an acknowledgement from Apple Asia in the form of a title: Apple Distinguished Educator (2007). The researcher in me was born; I realized that here was my true calling.
<br>
<br>

After successfully creating the infrastructure, methodologies and processes for video capture of live lectures, I lost no time in migrating to my passion: animation. A new project that had just been launched – OSCAR – was waiting just for me! So what if OSCAR was meant for the education domain?! I had a strong premonition that here was destiny in the making for me. OSCAR (an acronym for Open Source Courseware Animations Repository) gave me a first-hand realization of what eventually was to become my PhD research topic: visual communication issues in educational content creation processes.
<br>
<br>

For Project OSCAR, I conceptualized interaction design strategies for the learning objects (LOs). I studied the end-to-end methodology of LO creation, and realized that there existed a significant communication gap between the script writer (the  designer, in this process) and the animators. Using my acquired expertise in visual design, video production and animation film making, I operationalized some of the well known principles from these domains and modified the templates used for the communication between instructional designers and the animators. The results were so encouraging that they were published in leading journals as well as at international conferences. (EdMedia, ICCE, ICEL and New frontiers in Education.
<br>
<br>

Around this time, almost as a coincidence, a window of opportunity opened up in the form of a new tool: Blender (a very versatile, open source 3D animation and content creation suite). The potential for using Blender was so huge that I received a grant from the Ministry of Human Resource Development (Government of India), to popularize and train personnel in Blender. I promptly put together ‘Team Blender’ and created training material that was used during Blender workshops across the country (20 in all reaching out to about a thousand eager-to-learn enthusiasts)! The response was overwhelming, to say the least. Many a young engineer took to Blender like a duck to water.
<br>
<br>

Small wonder, therefore, that OSCAR was the reason I enrolled as a research scholar at YCMOU, a national-level open university in India. This was a conscious decision, indeed. Two of the best teachers in educational technology (ed-tech) domain were my PhD supervisors (Prof. Sridhar Iyer and Prof. Sahana Murthy, both from the interdisciplinary program in educational technology at IIT Bombay). It is under their guidance that I have been able to steer my research in an interdisciplinary and eclectic manner.
<br>
<br>
Here is a word cloud of my thesis:
<p align="center">
  <img src="{{ site.baseurl }}/images/word_cloud.png" alt="Word cloud of thesis" style="max-width:100%; height:auto; display:block; margin:auto;" />
</p>

</p>
</div>


---

### Recognitions and Awards

<div class="jumbotron" style="background-color:#f8f9fa; padding:2rem 2rem;">
  <h5><strong>AWARDS</strong></h5>
  <ul>
    <li>2nd prize, Swatantrata ka Vigyan Filmotsav, Vigyan Prasar, Government of India, 2021</li>
    <li>Finalist: edX Prize 2019, for Exceptional Contributions in Online Teaching and Learning, 2019</li>
    <li>Jury Special Mention award, National Institute of Rural Development Film Festival, 2018</li>
    <li>3 certificates of appreciation, National Knowledge Corporation, Govt. of India, 2008</li>
    <li>Best Animation Film (Social Welfare): UNICEF-LAADLI, 2008 and FICCI-BAF, 2007</li>
    <li>Second prize in Cartooning, Youth Festival, Aurangabad, 1993</li>
  </ul>
  <h5><strong>CERTIFICATIONS</strong></h5>
  <ul>
    <li>Microsoft Research India Summer School, 2010</li>
    <li>Human Computer Interaction course, Industrial Design Center, IIT Bombay, 2009</li>
    <li>Apple Distinguished Educator India, Bangkok, Thailand, 2007</li>
  </ul>
  <h5><strong>POSITIONS HELD</strong></h5>
  <ul>
    <li>Member, Academic Council: YC Maharashtra Open University, Nashik, 2006-2010</li>
    <li>Member, Syllabus committee: BA in Animation and Multimedia, RTM Nagpur University,2008</li>
    <li>Jury member, ANIFEST, Mumbai 2012</li>
  </ul>
  <h5><strong>INVITED LECTURES</strong></h5>
  <ul>
    <li>Use of visualizations in eLearning, Refresher course, Mumbai University, 2012, 2014</li>
    <li>Application of Blender 3D for eLearning, Blender Conference, Netherlands, 2009</li>
    <li>Animation in eLearning, Digital Learning conference, New Delhi, 2008</li>
  </ul>
  <h5><strong>PANEL MEMBER</strong></h5>
  <ul>
    <li>NASSCOM Animation and Gaming Summit, Aurangabad, 2009</li>
    <li>Animation for eLearning , CDAC Mumbai and Hyderabad, 2009</li>
    <li>National Workshop on Technology Interventions in Higher Education, YCMOU Nashik,2009</li>
  </ul>
</div>

---


---

