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

# Bootstrap notes
https://www.youtube.com/watch?v=eow125xV5-c&t=142s&ab_channel=Raddy

Ademruimte aan zijkanten: .container
Columns maken: .row > .col (voor al de columns die je wilt)

**Typography**
<h1 class="display-1"></h1>
1: 5rem > 80px
2: 4.5rem > 72px
3: 4rem > 64px
4: 3.5rem > 56px
5: 3rem > 48px
6: 2.5rem > 40px

<h1></h1> voor Paragraph
1: 40px
2: 32px
3: 28px
4: 24px
5: 20px
6: 16px

**Components:**
https://getbootstrap.com/docs/5.1/components/accordion/

**Buttons**
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>

Large buttons
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>

Small buttons
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>

Sizes:
Large: padding: 8px 16px, font-size 20px
Normal: padding: 6px 12px, font-size 16px
Small: padding: 4px 8px, font-size 14px

**Icons**
Standaard 32px