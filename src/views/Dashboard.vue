<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <article class="col-xl-12 col-lg-12">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        The energy market is a bit cumbersome.<br>
                        Depending on your use case, you can save a lot of money if you choose the energy plan that is more cost effective.<br><br>

                        We have different energy plans with different prices depending on the hour of the day you use the energy.<br>

                        <ul>
                            <li>
                                The easiest one is the "unprecio" which has 1 period so you pay energy at the same price all day
                            </li>
                            <li>
                                Then we have a more clever option which is "dosprecios" which has one price from 13h to 23h and another price on the rest of hours
                            </li>
                            <li>
                                And finally, companies can benefit from "3.0a" which has multiple periods with multiple prices.
                            </li>
                        </ul>
                    </stats-card>
                </article>
            </div>
        </base-header>

        <!--Chart-->
        <div class="container-fluid mt--7">
            <div class="row">
                <section v-if="!loading" class="col-xl-12 mb-12 mb-xl-12">
                    <card type="white" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase ls-1 mb-1">Compare the energy plans</h6>
                                <h5 class="h3 mb-0">Select an energy plan</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item" v-for="(item, index) in plans" v-bind:key="item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === index}"
                                           @click.prevent="initBigChart(index)">
                                            {{ item }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                v-if="bigLineChart.activeIndex != -1"
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </section>
            </div>
            <!-- End chart-->
        </div>
    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';

  import axios from "axios";

  export default {
    components: {
      LineChart,
    },
    data() {
        return {
            loading: true,
            json: null,
            plans: null,
            bigLineChart: {
                allData: [
                ],
                activeIndex: -1,
                extraOptions: chartConfigs.blueChartOptions,
            }
        }
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: this.bigLineChart.allData[index],
          labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h', ''],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
      stringIntervalToArrayFromInterval(string) {
        return string.split('-').map(Number);
      },
      hoursArrayFromInterval(interval, value) {
        let hoursArray = new Array(24);
        hoursArray.fill(value, interval[0], interval[1]+2);
        return hoursArray;
      },
      datasetObjectFromHoursArray(hoursArray, interval) {
        return {
          label: interval,
          data: hoursArray,
          pointBackgroundColor: "transparent"
        };
      },
      datasetFromJsonData(jsonData) {
        let dataset = new Array(jsonData.length);
        for (let i = 0; i < jsonData.length; i++) {
          let interval = Object.keys(jsonData[i])[0];
          let value = Object.values(jsonData[i])[0];
          let intervalArray = this.stringIntervalToArrayFromInterval(interval);
          let hoursArray = this.hoursArrayFromInterval(intervalArray, value);
            dataset[i] = this.datasetObjectFromHoursArray(hoursArray, interval);
        }
        return dataset;
      },
      datasetsFromJsonData(jsonData, keys) {
        let dataset = new Array(jsonData.length);
        for (let i = 0; i < keys.length; i++) {
          dataset[i] = this.datasetFromJsonData(jsonData[keys[i]]);
        }
        return dataset;
      }
    },
    mounted() {
        axios
            .get('/prices.json')
            .then(response => {
                this.json = response['data'];
                this.plans = Object.keys(response['data']);
                this.bigLineChart.allData = this.datasetsFromJsonData(this.json, this.plans);
                this.loading = false;
            })
    }
  };
</script>
<style></style>
