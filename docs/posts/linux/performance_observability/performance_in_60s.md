# Linux Performance

## uptime

uptime - Tell how long the system has been running.

```bash
[pinklure@Maj ~]$ uptime
 14:50:52 up 3 days, 16 min,  2 users,  load average: 1.74, 1.00, 0.90
```

{up time since last boot}, {user number}, {CPU load average in 1 min, 5 min, 15 min}


## dmesg | tail

dmesg - print or control the kernel ring buffer

```
[53369.999676] nvme 0000:02:00.0:   device [15b7:5006] error status/mask=00000001/0000e000
[53369.999684] nvme 0000:02:00.0:    [ 0] RxErr                  (First)
[53409.891789] pcieport 0000:00:1d.0: AER: Corrected error received: 0000:02:00.0
[53409.891809] nvme 0000:02:00.0: PCIe Bus Error: severity=Corrected, type=Physical Layer, (Receiver ID)
[53409.891815] nvme 0000:02:00.0:   device [15b7:5006] error status/mask=00000001/0000e000
[53409.891821] nvme 0000:02:00.0:    [ 0] RxErr                  (First)
[53448.932368] pcieport 0000:00:1d.0: AER: Corrected error received: 0000:02:00.0
[53448.932394] nvme 0000:02:00.0: PCIe Bus Error: severity=Corrected, type=Physical Layer, (Receiver ID)
[53448.932401] nvme 0000:02:00.0:   device [15b7:5006] error status/mask=00000001/0000e000
[53448.932410] nvme 0000:02:00.0:    [ 0] RxErr                  (First)
```