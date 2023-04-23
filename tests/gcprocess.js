function layer1() {
    function layer2(cal) {
        function layer3(i) {
            if (i > 0) {
                return layer3(i - 1) * i;
            }
            else {
                return 1;
            }
        }
        cal.mu = layer3;
    }
    var calcu = {};
    layer2(calcu);
    console.log(calcu.mu(3));
}

layer1();