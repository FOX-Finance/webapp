<template>
  <div class="uk-width-1-1">
    <!--div v-if="!connected" class="wallet-outer uk-width-1-1">
      <div class="wallet-inner">
        <span uk-icon="icon: more; ratio: 3"></span>
        <p>Please connect to wallet</p>
      </div>
    </div-->
    <div class="uk-width-1-1">
      <hr />
      <div class="uk-inline form-icon">
        <a class="uk-form-icon uk-form-icon-flip input-form-icon"
          ><img src="/img/foxs-icon.png" style="width: 20px" /><span>FOXS</span></a
        >
        <input
          class="uk-input input-form uk-form-width-medium uk-form-large"
          type="number"
        />
      </div>
      <div class="wrap">
        <span
          class="icon-circle"
          uk-icon="icon: arrow-down; ratio: 2;"
          style="margin-left: -1px"
        ></span>
      </div>
      <div class="uk-inline form-icon">
        <a class="uk-form-icon uk-form-icon-flip input-form-icon"
          ><img src="/img/sin-icon.png" style="width: 20px" /><span>NIS</span></a
        >
        <input
          readonly
          class="uk-input result-form uk-form-width-medium uk-form-large"
          type="number"
        />
      </div>
      <hr />
      <button class="uk-button uk-button-default uk-button-large form-button">
        Coupon
      </button>
    </div>
  </div>
</template>
