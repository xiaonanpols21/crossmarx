# Sass notes
https://www.youtube.com/watch?v=Zz6eOVaaelI&ab_channel=DevEd

**Variable:** $primary-color

**Nesten:**
header {
    button {

    }
    &:hover {

    }
}

**Meerste sass bestanden:** _header.scss

**Importeren:**
@import: '.sass/variables';
@import '.sass/header';

**Code hergebruiken:**
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

header {
    @include flexCenter();
}

**Iets anders dan de rest van code hergebruiken:**
@mixin flexCenter($direction) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
}

header {
    @include flexCenter(column);
}

Je kan meerdere parameters gebruiken

**Extend, om code te kopieren naar andere plekken**
.contact {
    @extend header;
}

Om te overschrijven, gewoon eronder typen

===
https://www.youtube.com/watch?v=nu5mdN2JIwM&ab_channel=TraversyMedia

**Code hergebruiken**
%btn {

}

.btn-primary {
    @extend %btn;
}

Om te overschrijven, gewoon eronder typen

**Licht donker kleur van 1 kleur**
background-color: lighten($primary-color, 10%);

32.25: if else statements
40.29: loop
