const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const n = urlParams.get('n');

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function startAlgorithm(n) {
            res = n;
            arr = [];
            arr.push(n);
            while (res != 1) {
                if (n % 2 == 1) {
                    res = (n * 3) + 1;
                    arr.push(res);
                } else {
                    res = n / 2;
                    arr.push(res);
                }
                n = res;
            }
            return arr;
        }
        
        async function createChart(a, b) {
            let canvas = document.getElementById('chart')
            let ctx = canvas.getContext('2d');
            let chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: a,
                    datasets: [{
                        label: 'Collatz Conjecture',
                        backgroundColor: '#111111',
                        borderColor: '#ffffff',
                        data: a,
                    }]
                },
                options: {}
            });
            debugger;
        }

        function fillInfo(a) {
            document.getElementById('start').innerHTML = a[0];
            document.getElementById('size').innerHTML = a.length;
            let odds = 0;
            let evens = 0;
            let biggest = 0;
            for (let i = 0; i < a.length; i++) {
                if (a[i] % 2 == 0) {
                    evens++;
                } else {
                    odds++;
                }
                if (a[i] > biggest) {
                    biggest = a[i];
                }
            }
            document.getElementById('odds').innerHTML = odds;
            document.getElementById('evens').innerHTML = evens;
            document.getElementById('biggest').innerHTML = biggest;
        }

        function saveChart() {
            let canvas = document.getElementById('chart');
            let ctx = canvas.getContext('2d');
            ctx.globalCompositeOperation = 'destination-over'
            ctx.fillStyle = "#111111";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let link = document.createElement('a');
            link.download = 'chart.png';
            link.href = canvas.toDataURL();
            link.click();
        }
        
        let i = n || getRandomInt(100);
        let array = startAlgorithm(i);
        createChart(array);
        fillInfo(array);