<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">
                            Why us?
                        </h1>
                        <p class="text-white mt-0 mb-5">
                            We only use 100% certified green energy.<br>
                            There's no other option for us. We promote the use of renewable energies and all the energy we sell is 100% certified by the CNMC.
                        </p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">

                <section class="col-xl-12 order-xl-1">
                    <card shadow type="white">
                        <div class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">
                                        You'll always get a fair price for your energy.
                                    </h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="" class="btn btn-sm btn-primary">
                                        <router-link tag="tr" :to="'/dashboard/'">
                                            Discover your quota
                      </router-link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </card>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'welcome',
    data() {
        return {};
    },
  };
</script>
<style></style>
