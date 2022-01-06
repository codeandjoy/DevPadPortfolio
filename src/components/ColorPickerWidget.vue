<template>
    <div class="color-picker-widget">
        <div class="widget-clr clr-green"></div>
        <div class="widget-clr clr-blue"></div>
        <div class="widget-clr clr-purple"></div>
        <div class="widget-clr clr-yellow"></div>
        <div class="widget-clr clr-orange"></div>
        <div class="widget-clr clr-red"></div>
    </div>
</template>

<script>
export default{
    name: 'ColorPickerWidget'
}
</script>

<style lang="scss" scoped>
$widget-height: 45px;

.color-picker-widget{
    position: absolute;
    top: -$widget-height;
    left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 220px;
    height: $widget-height;

    background-color: #2C2C2C;
    border-radius: 20px;

    .widget-clr{
        width: 20px;
        height: 20px;

        border-radius: 50%;
    }

    .widget-clr:not(:last-child){
        margin-right: 10px;
    }
}
</style>