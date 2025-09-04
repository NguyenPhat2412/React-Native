import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface FooterLink {
  label: string;
  url: string;
}
interface FooterSection {
  _id: string;
  title: string;
  links: FooterLink[];
}
interface FooterData {
  _id: string;
  brand: {
    description: string;
    logo: string;
  };
  sections: FooterSection[];
}
const API_URL = "https://server-web-nong-san-sach.onrender.com";
const Footer: React.FC = () => {
  const [data, setData] = useState<FooterData[]>([]);

  useEffect(() => {
    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/client/footer`);
        const json = await response.json();
        setData(json);
        console.log("Footer data fetched successfully", json);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      } finally {
        console.log("Fetch attempt finished");
      }
    };
    fetchData();
  }, [API_URL]);

  return (
    <View>
      <Text>© 2024 Your Company. All rights reserved.</Text>
      {data && (
        <>
          <Image
            src={`${API_URL}/public/Image/Logo/${data.brand.logo}`}
            style={styles.logo}
          />
          <Text style={styles.brandDescription}>{data.brand.description}</Text>
          {data.sections.map((section) => (
            <View key={section._id} style={styles.footerContainer}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.links.map((link) => (
                <View key={link.url}>
                  <Text style={styles.linkLabel}>{link.label}</Text>
                </View>
              ))}
            </View>
          ))}
        </>
      )}
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 12,
  },
  linkLabel: {
    color: "#007bff",
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  brandDescription: { fontSize: 14, color: "#555", marginTop: 4 },
});
