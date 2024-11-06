class GPU:
    "OOP from the Huawei learning website that I traded my privacy and personal data for"
    "Altough I use some random password, I already opened the PDF file"
    benchmark_score = {
        "RX 7900 GRE": 22323, "RX 7800 XT": 20026, "RX 7700 XT": 16999,
        "RX 7600 XT": 11291, "RX 7600": 11002, "RX 6600 XT": 9579,
        "RTX 4090": 36517, "RTX 4080 S": 28381, "RTX 4080": 28273,
        "RTX 4070 Ti S": 24266, "RTX 4070 S": 20981, "RTX 4070": 17857,
        "RTX 4060 Ti 8GB": 13507, "RTX 4060": 10620, "RTX 3070": 13665,
        "RTX 3060": 8776, "RTX 3050": 6260, "GTX 1660 SUPER": 5985
    }

    game_fps = {
        "RX 7900 GRE": 135.8, "RX 7800 XT": 129.3, "RX 7700 XT": 116.1,
        "RX 7600 XT": 91.9, "RX 7600": 82.0, "RX 6600 XT": 74.7,
        "RTX 4090": 154.1, "RTX 4080 S": 148.3, "RTX 4080": 147.0,
        "RTX 4070 Ti S": 142.3, "RTX 4070 S": 134.2, "RTX 4070": 122.0,
        "RTX 4060 Ti 8GB": 100.4, "RTX 4060": 84.9, "RTX 3070": 98.8,
        "RTX 3060": 72.3, "RTX 3050": 51.9, "GTX 1660 SUPER": 46.8
    }

    tgp = {
        "RX 7900 GRE": 260, "RX 7800 XT": 263, "RX 7700 XT": 245,
        "RX 7600 XT": 190, "RX 7600": 165, "RX 6600 XT": 160,
        "RTX 4090": 450, "RTX 4080 S": 320, "RTX 4080": 320,
        "RTX 4070 Ti S": 285, "RTX 4070 S": 220, "RTX 4070": 200,
        "RTX 4060 Ti 8GB": 160, "RTX 4060": 115, "RTX 3070": 220,
        "RTX 3060": 170, "RTX 3050": 130, "GTX 1660 SUPER": 125
    }

    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.__score = self.benchmark_score[name]
        self.__fps = self.game_fps[name]
        self.__power = self.tgp[name]

    # Less is more
    def money_spent_for_performance(self):
        return self.price / self.__score
    def money_spent_for_fps(self):
        return self.price / self.__fps
    def watt_per_performance(self):
        return self.__power / self.__score
    def watt_per_fps(self):
        return self.__power / self.__fps
    
    # Greater is better
    def performance_per_money(self):
        return self.__score / self.price
    def fps_per_money(self):
        return self.__fps / self.price
    def performance_per_watt(self):
        return self.__score / self.__power
    def fps_per_watt(self):
        return self.__fps / self.__power

    # not complete yet but can use it
    # more result is more value
    def more_performance_value(self):
        return self.money_spent_for_performance() / self.watt_per_performance()
    def more_fps_value(self):
        return self.money_spent_for_fps() / self.watt_per_fps()

def main():
    "get input, process and output"
    # For testing
    gpu1_name = input("GPU 1 : ")
    price1 = float(input("PRICE : "))
    gpu2_name = input("GPU 2 : ")
    price2 = float(input("PRICE : "))
    # For testing

    gpu1 = GPU(gpu1_name, price1)
    gpu2 = GPU(gpu2_name, price2)
    result1 = gpu1.more_performance_value()
    result2 = gpu2.more_performance_value()

    more_value = max(result1, result2)
    less_value = min(result1, result2)

    percent_diff = ((more_value / less_value) * 100) - 100

    # For testing
    print("result1",result1)
    print("result2",result2)
    print("differrance","+",percent_diff,"%")
    # For testing

main()
