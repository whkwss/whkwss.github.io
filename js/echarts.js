$(function() {
  echarts_total_num();
  echarts_rush_hour();
  echarts_total_num_top();
  echarts_utilization();

  function echarts_total_num() {
    var myChart = echarts.init(document.getElementById("total-num"));

    option = {
      backgroundColor: "rgba(0,0,0,0)",
      tooltip: {
        trigger: "item",
        formatter: "{b}:<br/>{c}({d}%)"
      },

      legend: {
        x: "center",
        y: "2%",
        data: ["可回收", "有害垃圾", "干垃圾", "湿垃圾"],
        icon: "circle",
        textStyle: {
          color: "#fff"
        }
      },
      calculable: true,
      series: [
        {
          name: "垃圾种类",
          type: "pie",
          startAngle: 0,
          radius: [51, 80],
          center: ["50%", "20%"],
          roseType: "area",
          avoidLabelOverlap: false,
          lable: {
            normal: {
              show: true,
              formatter: "{c}kg"
            },
            emphasis: {
              show: true
            }
          },

          labelLine: {
            normal: {
              show: true,
              //   解释线长度
              length2: 1
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              value: 900,
              name: "可回收",
              itemStyle: {
                normal: {
                  color: "#09c7f7"
                }
              }
            },
            {
              value: 500,
              name: "有害垃圾",
              itemStyle: {
                normal: {
                  color: "#e53422"
                }
              }
            },
            {
              value: 300,
              name: "干垃圾",
              itemStyle: {
                normal: {
                  color: "#f7f709"
                }
              }
            },
            {
              value: 1100,
              name: "湿垃圾",
              itemStyle: {
                normal: {
                  color: "#ff9900"
                }
              }
            },

            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }

  function echarts_rush_hour() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("rush-hour"));

    option = {
      tooltip: {
        trigger: "axis",
        formatter: "{c}kg"
      },
      legend: {
        x: "center",
        y: "2%",
        data: ["可回收", "有害垃圾", "干垃圾", "湿垃圾"],
        icon: "circle",
        textStyle: {
          color: "#fff"
        },
        selectedMode: "single"
      },

      grid: {
        left: "3%",
        right: "5%",
        top: "8%",
        bottom: "25%",
        containLabel: true
      },
      color: ["#a4d8cc", "#25f3e6"],
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            },
            interval: { default: 0 },
            //   rotate:50,
            formatter: function(params) {
              var newParamsName = ""; // 最终拼接成的字符串
              var paramsNameNumber = params.length; // 实际标签的个数
              var provideNumber = 5; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                var tempStr = "";
                tempStr = params.substring(0, 5);
                newParamsName = tempStr + "..."; // 最终拼成的字符串
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }

              //将最终的字符串返回
              return newParamsName;
            }
          },
          data: [
            "00:00",
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00"
          ]
        }
      ],
      yAxis: {
        min: 0,
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#ccc",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(160,160,160,0.2)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(160,160,160,0.2)"
          }
        }
      },

      series: [
        {
          name: "干垃圾",
          lineStyle: {
            color: "#f7f709"
          },

          type: "line",
          areaStyle: {
            normal: {
              type: "default",
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                0.8,
                [
                  {
                    offset: 0,
                    color: "rgba(129,197,255,.6)"
                  },
                  {
                    offset: 1,
                    color: "rgba(129,197,255,.0)"
                  }
                ],
                false
              )
            }
          },
          smooth: true,
          itemStyle: {
            normal: { color: "#f7f709" }
          },
          data: [394, 485, 343, 413, 521, 652, 444, 514, 569, 465, 567, 503]
        },
        {
          name: "湿垃圾",
          lineStyle: {
            color: "#ff9900"
          },

          type: "line",
          areaStyle: {
            normal: {
              type: "default",
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                0.8,
                [
                  {
                    offset: 0,
                    color: "rgba(129,197,255,.6)"
                  },
                  {
                    offset: 1,
                    color: "rgba(129,197,255,.0)"
                  }
                ],
                false
              )
            }
          },
          smooth: true,
          itemStyle: {
            normal: { color: "#ff9900" }
          },
          data: [616, 489, 542, 463, 688, 654, 428, 452, 628, 534, 596, 506]
        },
        {
          name: "可回收",
          lineStyle: {
            color: "#09c7f7"
          },

          type: "line",
          areaStyle: {
            normal: {
              type: "default",
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                0.8,
                [
                  {
                    offset: 0,
                    color: "rgba(129,197,255,.6)"
                  },
                  {
                    offset: 1,
                    color: "rgba(129,197,255,.0)"
                  }
                ],
                false
              )
            }
          },
          smooth: true,
          itemStyle: {
            normal: { color: "#09c7f7" }
          },
          data: [563, 432, 394, 627, 658, 635, 375, 501, 665, 538, 639, 522]
        },
        {
          name: "有害垃圾",
          lineStyle: {
            color: "#e53422"
          },

          type: "line",
          areaStyle: {
            normal: {
              type: "default",
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                0.8,
                [
                  {
                    offset: 0,
                    color: "rgba(129,197,255,.6)"
                  },
                  {
                    offset: 1,
                    color: "rgba(129,197,255,.0)"
                  }
                ],
                false
              )
            }
          },
          smooth: true,
          itemStyle: {
            normal: { color: "#e53422" }
          },
          data: [664, 661, 556, 577, 441, 521, 327, 538, 361, 578, 494, 305]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }
  function echarts_total_num_top() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("total-num-top"));

    var xData = (function() {
      var data = ["北区", "西区", "南区", "东区"];

      return data;
    })();

    var data = [23, 22, 20, 30];

    option = {
      tooltip: {
        show: "true",
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0.4)", // 背景
        padding: [8, 10], //内边距
        formatter: function(params) {
          if (params.seriesName != "") {
            return params.name + " ：  " + params.value + " kg";
          }
        }
      },
      grid: {
        borderWidth: 0,
        top: 10,
        bottom: 55,
        left: 40,
        right: 10,
        textStyle: {
          color: "#fff"
        }
      },
      xAxis: [
        {
          type: "category",

          axisTick: {
            show: false
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.2)"
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: "#bac0c0",
              fontWeight: "normal",
              fontSize: "12"
            }
          },
          data: xData
        },
        {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: xData
        }
      ],
      yAxis: {
        min: 10,
        type: "value",
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.2)"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#bac0c0",
            fontWeight: "normal",
            fontSize: "12"
          },
          formatter: "{value}"
        }
      },
      series: [
        {
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#00c0e9"
                },
                {
                  offset: 1,
                  color: "#3b73cf"
                }
              ]),
              barBorderRadius: 50,
              borderWidth: 0
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: "rgba(105,123, 214, 0.7)"
            }
          },
          zlevel: 2,
          barWidth: "20%",
          data: data
        }
        // {
        //   name: "",
        //   type: "bar",
        //   xAxisIndex: 1,
        //   zlevel: 1,
        //   itemStyle: {
        //     normal: {
        //       color: "transparent",
        //       borderWidth: 0,
        //       shadowBlur: {
        //         shadowColor: "rgba(255,255,255,0.31)",
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 2
        //       }
        //     }
        //   },
        //   barWidth: "20%",
        //   data: [30, 30, 30, 30, 30]
        // }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }
  function echarts_utilization() {
    var myChart = echarts.init(document.getElementById("utilization"));

    option = {
      tooltip: {
        show: "true",
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0.4)" // 背景
      },

      grid: {
        borderWidth: 0,
        top: 20,
        bottom: 35,
        left: 40,
        right: 10,
        textStyle: {
          color: "#fff"
        }
      },

      legend: {
        left: "center",
        data: ["北区", "西区", "东区", "南区"],
        textStyle: {
          color: "#fff"
        },
        selectedMode: "single"
      },

      radar: [
        {
          indicator: [
            { text: "可回收", max: 100 },
            { text: "有害垃圾", max: 100 },
            { text: "干垃圾", max: 100 },
            { text: "湿垃圾", max: 100 },
            { text: "平均利用率", max: 100 }
          ],
          center: ["50%", "50%"],
          radius: 50
        }
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item"
          },

          labelLine: {
            normal: {
              show: true,
              //   解释线长度
              length2: 10
            },
            emphasis: {
              show: true
            }
          },

          areaStyle: {},
          data: [
            {
              value: [60, 73, 85, 40, 50],
              name: "北区",
              itemStyle: { normal: { color: "#09c7f7" } }
            },
            {
              value: [71, 50, 60, 80, 60],
              name: "西区",
              itemStyle: { normal: { color: "#f7f709" } }
            },
            {
              value: [80, 40, 75, 50, 55],
              name: "东区",
              itemStyle: { normal: { color: "#ff9900" } }
            },
            {
              value: [40, 50, 73, 85, 70],
              name: "南区",
              itemStyle: { normal: { color: "#e53422" } }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }
});
