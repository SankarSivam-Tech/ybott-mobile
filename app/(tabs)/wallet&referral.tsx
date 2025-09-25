import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Wallet Section Component
const WalletSection = () => {
  const [showWithdraw, setShowWithdraw] = useState(false);

  return (
    <View className="bg-gray-800 rounded-xl p-4 mb-4">
      <View className="flex-row items-center mb-4">
        <Ionicons name="wallet" size={20} color="#F97316" />
        <Text className="text-orange-500 font-semibold ml-2 text-lg">
          Wallet
        </Text>
      </View>

      <View className="flex-row justify-between mb-4">
        <View className="flex-1 mr-2">
          <Text className="text-orange-400 text-sm mb-1">Gajana Balance</Text>
          <Text className="text-white text-2xl font-bold">₹77835.25</Text>
        </View>
        <View className="flex-1 ml-2">
          <Text className="text-orange-400 text-sm mb-1">My Total Balance</Text>
          <Text className="text-white text-2xl font-bold">₹5.95</Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-orange-500 rounded-lg py-3 px-4 flex-row items-center justify-center mb-4"
        onPress={() => setShowWithdraw(!showWithdraw)}
      >
        <Text className=" text-white font-semibold mr-2">Withdraw</Text>
        <Ionicons name="card-outline" size={18} color="white" />
      </TouchableOpacity>

      <View className="space-y-2">
        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <Text className="text-gray-300 text-sm font-semibold">
            Revenue Contribution from total Rent
          </Text>
          <Ionicons name="chevron-down" size={16} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <Text className="text-gray-300 text-sm font-semibold">
            Revenue Contribution from total Subscription
          </Text>
          <Ionicons name="chevron-down" size={16} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Referral Section Component
const ReferralSection = () => {
  const referralCode = "SUB-620311";
  const totalReferrals = 3;

  const shareReferralCode = async () => {
    try {
      await Share.share({
        message: `Join using my referral code: ${referralCode}`,
        title: "Share Referral Code",
      });
    } catch (error) {
      Alert.alert("Error", "Failed to share referral code");
    }
  };

  const copyReferralCode = () => {
    Alert.alert("Copied!", "Referral code copied to clipboard");
  };

  return (
    <View className="bg-gray-800 rounded-xl p-4 mb-4">
      <View className="flex-row items-center mb-4">
        <Ionicons name="people" size={20} color="#F97316" />
        <Text className="text-orange-500 font-semibold ml-2 text-lg">
          Referral and Earn
        </Text>
      </View>

      <View className="flex flex-col  mb-4">
        <View className="flex-1 mr-2">
          <Text className="text-gray-400 text-sm mb-2">My Referral Code</Text>
          <View className="bg-gray-700 rounded-lg p-3 flex-row items-center justify-between">
            <Text className="text-orange-400 font-bold text-lg">
              {referralCode}
            </Text>
            <View className="flex-row">
              <TouchableOpacity
                onPress={copyReferralCode}
                className="bg-orange-500 rounded-md p-2 mr-2"
              >
                <Ionicons name="copy" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={shareReferralCode}
                className="bg-blue-500 rounded-md p-2"
              >
                <Ionicons name="share" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-1 mt-2 flex-row items-center gap-2">
          <Text className="text-gray-400 text-sm font-medium">Total Referrals :</Text>

          <Text className="text-orange-400 font-extrabold text-sm">
            {totalReferrals}
          </Text>
        </View>
      </View>

      <View>
        <Text className="text-gray-400 text-sm mb-2">My Backers</Text>
        <View className="bg-gray-700 rounded-lg p-3">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">T</Text>
            </View>
            <View>
              <Text className="text-white font-medium">testgojanaaa</Text>
              <Text className="text-gray-400 text-xs">Subscriber</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text className="text-gray-400 text-sm mb-2">My Backers</Text>
        <View className="bg-gray-700 rounded-lg p-3">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">T</Text>
            </View>
            <View>
              <Text className="text-white font-medium">testgojanaaa</Text>
              <Text className="text-gray-400 text-xs">Subscriber</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text className="text-gray-400 text-sm mb-2">My Backers</Text>
        <View className="bg-gray-700 rounded-lg p-3">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">T</Text>
            </View>
            <View>
              <Text className="text-white font-medium">testgojanaaa</Text>
              <Text className="text-gray-400 text-xs">Subscriber</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Bank Account Section Component
const BankAccountSection = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const bankAccounts = [
    {
      id: 1,
      bank: "check",
      accountNumber: "****0837",
      accountType: "Primary",
      holderName: "JOHN DOE",
      isPrimary: true,
    },
    {
      id: 2,
      bank: "ICICI",
      accountNumber: "****8673",
      accountType: "Secondary",
      holderName: "JOHN DOE",
      isPrimary: false,
    },
  ];

  return (
    <View className="bg-gray-800 rounded-xl p-4">
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <Ionicons name="card" size={20} color="#F97316" />
          <Text className="text-orange-500 font-semibold ml-2 text-lg">
            Bank Accounts
          </Text>
        </View>
        <TouchableOpacity className="bg-orange-500 rounded-full w-8 h-8 items-center justify-center">
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Text className="text-gray-400 text-sm mb-3">
        Manage your bank accounts securely
      </Text>

      <View>
        {bankAccounts.map((account, index) => (
          <TouchableOpacity
            key={account.id}
            className={`bg-gray-700 rounded-lg p-4 ${
              account.isPrimary
                ? "border border-orange-500"
                : "border border-gray-600"
            } ${index > 0 ? "mt-3" : ""}`}
            // onPress={() => setSelectedBank(account.id)}
          >
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-row items-center">
                <View className=" bg-gray-600 rounded items-center justify-center mr-3">
                  <Text className="text-white text-xs">
                    {account.bank.toUpperCase()}
                  </Text>
                </View>
                <View>
                  <Text className="text-white font-medium">{account.bank}</Text>
                  <Text className="text-gray-400 text-sm">
                    {account.accountNumber}
                  </Text>
                </View>
              </View>

              {account.isPrimary ? (
                <View className="bg-orange-500 rounded-full px-2 py-1">
                  <Text className="text-white text-xs font-medium">Primary</Text>
                </View>
              ) : (
                <TouchableOpacity className="bg-gray-600 rounded-md p-1">
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={16}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-300 text-sm">Account Holder</Text>
              <Text className="text-gray-300 text-sm">
                {account.holderName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Main Wallet Referral Screen
const WalletReferralScreen = () => {
  return (
    <View className="flex-1 bg-gray-900">
      <ScrollView
        className="flex-1 px-4 pt-12"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold text-center mb-2">
            Wallet & Referrals
          </Text>
          <Text className="text-gray-400 text-sm text-center">
            Manage your earnings and referrals in one place
          </Text>
        </View>

        {/* Wallet Section */}
        <WalletSection />

        {/* Referral Section */}
        <ReferralSection />

        {/* Bank Account Section */}
        <BankAccountSection />
      </ScrollView>
    </View>
  );
};

export default WalletReferralScreen;
